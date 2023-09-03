import { useAuthContext } from "../../hooks/authentication"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate, useParams, useResolvedPath } from "react-router-dom"

import {
  Container,
  MainContainer,
  FormContainer,
  FormInputWrapper,
  ButtonContainer,
} from "./styles"
import { FiUpload } from "react-icons/fi"

import Header from "../../components/Header"
import Footer from "../../components/Footer"
import GoBack from "../../components/GoBack"
import Input from "../../components/Input"
import SelectInput from "../../components/SelectInput"
import MultiSelect from "../../components/MultiSelectInput"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import Loading from "../../components/Loading"

import theme from "../../styles/theme"

import { ROUTES } from "../../common/constants"
import { insertStringIntoString, titleizeText } from "../../common/functions"
import { api } from "../../services/api"

const CrudDish = () => {
  const { id_dish } = useParams()
  const { pathname } = useResolvedPath()
  const { isAdmin } = useAuthContext()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingDishData, setIsLoadingDishData] = useState(false)

  const [uploadImg, setUploadImg] = useState(null)
  const [dishName, setDishName] = useState("")
  const [dishPrice, setDishPrice] = useState("")
  const [dishCategory, setDishCategory] = useState("")
  const [dishIngredients, setDishIngredients] = useState([])
  const [dishDescription, setDishDescription] = useState("")

  const [categoryArray, setCategoryArray] = useState([])
  const [ingredientsArray, setIngredientsArray] = useState([])

  const formHeader = pathname.includes("create_dish")
    ? "Adicionar prato"
    : pathname.includes("update_dish")
    ? "Editar prato"
    : ""

  const resetStates = () => {
    setIsLoading(true)
    setIsLoadingDishData(false)

    setUploadImg(null)
    setDishName("")
    setDishPrice("")
    setDishCategory("")
    setDishIngredients([])
    setDishDescription("")
    setCategoryArray([])
    setIngredientsArray([])
  }

  const ButtonOptions = () => {
    if (pathname.includes("create_dish")) {
      return (
        <Button color={theme.COLORS.TOMATO_400} onClick={handleInsert}>
          <span>Adicionar</span>
        </Button>
      )
    } else if (pathname.includes("update_dish")) {
      return (
        <>
          <Button color={theme.COLORS.DARK_800} onClick={handleDelete}>
            <span>Excluir prato</span>
          </Button>
          <Button
            color={theme.COLORS.TOMATO_400}
            onClick={() => handleUpdate(id_dish)}
          >
            <span>Salvar alterações</span>
          </Button>
        </>
      )
    } else {
      return <></>
    }
  }

  const validateInputs = () => {
    if (dishName === "" || dishPrice === "" || dishDescription === "") {
      toast.error("Os campos Nome, Preço e Descrição são obrigatórios!!")
      return false
    }

    if (dishIngredients.length === 0) {
      toast.error("Selecione pelo menos um ingrediente!!")
      return false
    }

    return true
  }

  const createUpdateForm = () => {
    let fileUploadForm = new FormData()
    fileUploadForm.append("id_dish_category", dishCategory)
    fileUploadForm.append("name", dishName)
    fileUploadForm.append("description", dishDescription)
    fileUploadForm.append("price", dishPrice)
    fileUploadForm.append("ingredients", JSON.stringify(dishIngredients))

    if (uploadImg) {
      fileUploadForm.append("dish_image", uploadImg)
    }

    return fileUploadForm
  }

  const handleImageUpdate = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    if (!file) {
      setUploadImg(null)
    } else {
      setUploadImg(file)
    }
  }

  const handleDishPrice = (event) => {
    const value = event.target.value
    const rePattern = /^[0-9]+\.?[0-9]{0,2}$/

    if (value === "" || rePattern.test(value)) {
      setDishPrice(value)
    }
  }

  const handleInsert = () => {
    const isValidInputs = validateInputs()
    if (!isValidInputs) return

    let fileUploadForm = createUpdateForm()

    api
      .post(ROUTES.CREATE_DISH, fileUploadForm)
      .then((resp) => {
        navigate("/")
        toast.success("Prato adicionado com sucesso na base de dados!!")
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível adicionar prato!!")
        }
      })
  }
  const handleDelete = () => {
    const isOkayToDelete = confirm("Está certo que deseja deletar o prato!!")

    if (!isOkayToDelete) return

    api
      .delete(`${ROUTES.DISH}/${id_dish}`)
      .then((resp) => {
        navigate("/")
        toast.success(resp.data.message)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível deletar prato!!")
        }
      })
  }
  const handleUpdate = (id_dish) => {
    const isValidInputs = validateInputs()
    if (!isValidInputs) return

    let fileUploadForm = createUpdateForm()

    api
      .post(`${ROUTES.UPDATE_DISH}/${id_dish}`, fileUploadForm)
      .then((resp) => {
        navigate("/")
        toast.success("Prato atualizado com sucesso na base de dados!!")
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        } else {
          toast.error("Não foi possível adicionar prato!!")
        }
      })
  }

  useEffect(() => {
    if (pathname.includes("update_dish") && !isAdmin) {
      navigate("/dish_not_found")
      return
    }

    const fetchCategoriesData = async () => {
      const resp = await api.get(ROUTES.DISHES_CATEGORIES)

      const categoryArrayAdj = resp.data.map((category) => {
        return { value: category.id_dish_category, label: category.name }
      })
      setCategoryArray(categoryArrayAdj)
      setDishCategory(categoryArrayAdj[0].value)
    }

    const fetchIngredientsData = async () => {
      const resp = await api.get(ROUTES.DISHES_INGREDIENTS)

      const ingredientsArrayAdj = resp.data.map((ingredient) => {
        return { value: ingredient.id_ingredient, label: ingredient.name }
      })

      setIngredientsArray(ingredientsArrayAdj)
    }

    resetStates()
    const fetchData = [fetchCategoriesData(), fetchIngredientsData()]

    Promise.all(fetchData)
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err)
        toast.error("Não foi possível obter dados!!")
      })
  }, [pathname])

  useEffect(() => {
    if (isLoading) return

    if (!pathname.includes("update_dish")) {
      return
    }

    if (!id_dish) {
      navigate("/dish_not_found")
      return
    }

    // get dish data
    const fetchData = async () => {
      const resp = await api.get(`${ROUTES.DISHES_DETAILS}/${id_dish}`)

      const { data } = resp

      if (Object.keys(data).length === 0) navigate("/dish_not_found")

      let dishPrice = String(Number(data.dish_price) / 100)
      dishPrice = insertStringIntoString(dishPrice, ".", dishPrice.length - 2)

      let selectedDishCategory = categoryArray.filter((category) => {
        return category.label === data.dish_category
      })

      let selectedDishIngredients = data.ingredients.split(",")
      let filteredIngredients = ingredientsArray.filter((ingredient) => {
        return selectedDishIngredients.includes(ingredient.label)
      })

      setDishName(titleizeText(data.dish_name))
      setDishPrice(dishPrice)
      setDishCategory(selectedDishCategory[0].value)
      setDishIngredients(filteredIngredients)
      setDishDescription(data.dish_description)
    }

    setIsLoadingDishData(true)

    fetchData()
      .then(() => setIsLoadingDishData(false))
      .catch((err) => {
        console.log(err)
        toast.error("Erro ao obter dados do prato!!")
      })
  }, [isLoading, pathname])

  return isLoading || isLoadingDishData ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <Container>
      <Header />
      <MainContainer>
        <GoBack />
        <h1>{formHeader}</h1>

        <FormContainer>
          <FormInputWrapper $name={"upload-img"}>
            <label htmlFor="upload-img">Imagem do prato</label>
            <Input
              icon={FiUpload}
              type="file"
              placeholder="selecione imagem"
              id="upload-img"
              style={{ display: "none" }}
              onChange={handleImageUpdate}
            >
              <label htmlFor="upload-img">
                <span>
                  {uploadImg ? "imagem carregada" : "selecione imagem"}
                </span>
              </label>
            </Input>
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-name"}>
            <label htmlFor="dish-name">Nome</label>
            <Input
              type="text"
              placeholder="Ex.: Salada Cesar"
              id="dish-name"
              onChange={(e) => setDishName(e.target.value)}
              value={dishName}
            />
          </FormInputWrapper>
          {categoryArray && (
            <FormInputWrapper $name={"dish-category"}>
              <label htmlFor="dish-category">Categoria</label>
              <SelectInput
                options={categoryArray}
                id="dish-category"
                onChange={(e) => setDishCategory(e.target.value)}
                value={dishCategory}
              />
            </FormInputWrapper>
          )}

          {ingredientsArray && (
            <FormInputWrapper $name={"dish-ingredients"}>
              <label htmlFor="dish-ingredients">Ingredientes</label>
              <MultiSelect
                options={ingredientsArray}
                defaultValue={[...dishIngredients]}
                onChange={(values) => setDishIngredients(values)}
              />
            </FormInputWrapper>
          )}

          <FormInputWrapper $name={"dish-price"}>
            <label htmlFor="dish-price">Preço</label>
            <Input
              type="text"
              placeholder="R$ 0,00"
              id="dish-price"
              onChange={handleDishPrice}
              value={dishPrice}
            />
          </FormInputWrapper>
          <FormInputWrapper $name={"dish-description"}>
            <label htmlFor="dish-description">Descrição</label>
            <TextArea
              id="dish-description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDishDescription(e.target.value)}
              value={dishDescription}
            />
          </FormInputWrapper>
        </FormContainer>
        <ButtonContainer>{ButtonOptions()}</ButtonContainer>
      </MainContainer>
      <Footer />
    </Container>
  )
}

export default CrudDish
