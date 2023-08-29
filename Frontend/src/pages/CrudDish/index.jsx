import { useEffect, useState } from "react"
import { useLocation, useParams, useResolvedPath } from "react-router-dom"

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

import theme from "../../styles/theme"

import { ROUTES } from "../../common/constants"
import { api } from "../../services/api"
import { toast } from "react-toastify"

const CrudDish = () => {
  const [uploadImg, setUploadImg] = useState(null)
  const [dishName, setDishName] = useState("")
  const [dishPrice, setDishPrice] = useState("")
  const [dishCategory, setDishCategory] = useState("")
  const [dishIngredients, setDishIngredients] = useState([])
  const [dishDescription, setDishDescription] = useState("")

  const [categoryArray, setCategoryArray] = useState([])
  const [ingredientsArray, setIngredientsArray] = useState([])

  const { id_dish } = useParams()

  const { pathname } = useResolvedPath()
  const formHeader = pathname.includes("create_dish")
    ? "Adicionar prato"
    : pathname.includes("update_dish")
    ? "Editar prato"
    : ""

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
          <Button color={theme.COLORS.TOMATO_400} onClick={handleUpdate}>
            <span>Salvar alterações</span>
          </Button>
        </>
      )
    } else {
      return <></>
    }
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
    if (dishName === "" || dishPrice === "" || dishDescription === "") {
      toast.error("Os campos Nome, Preço e Descrição são obrigatórios!!")
      return
    }

    if (dishIngredients.length === 0) {
      toast.error("Selecione pelo menos um ingrediente!!")
      return
    }

    let fileUploadForm = new FormData()
    fileUploadForm.append("id_dish_category", dishCategory)
    fileUploadForm.append("name", dishName)
    fileUploadForm.append("description", dishDescription)
    fileUploadForm.append("price", dishPrice)
    fileUploadForm.append("ingredients", JSON.stringify(dishIngredients))

    if (uploadImg) {
      fileUploadForm.append("dish_image", uploadImg)
    }

    for (let vl of fileUploadForm.values()) {
      console.log(vl)
    }

    api
      .post(ROUTES.CREATE_DISH, fileUploadForm)
      .then((resp) => {
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
  const handleDelete = () => {}
  const handleUpdate = () => {}

  useEffect(() => {
    api
      .get(ROUTES.DISHES_CATEGORIES)
      .then((resp) => {
        const categoryArrayAdj = resp.data.map((category) => {
          return { value: category.id_dish_category, label: category.name }
        })

        setCategoryArray(categoryArrayAdj)
        setDishCategory(categoryArrayAdj[0].value)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response)
        } else {
          toast.error("Não foi possível obter dados")
        }
      })
  }, [])

  useEffect(() => {
    api
      .get(ROUTES.DISHES_INGREDIENTS)
      .then((resp) => {
        const ingredientsArrayAdj = resp.data.map((ingredient) => {
          return { value: ingredient.id_ingredient, label: ingredient.name }
        })

        setIngredientsArray(ingredientsArrayAdj)
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response)
        } else {
          toast.error("Não foi possível obter dados")
        }
      })
  }, [])

  return (
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
                defaultValue={dishIngredients}
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
