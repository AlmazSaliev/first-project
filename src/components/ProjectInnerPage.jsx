import styled from '@emotion/styled'
import {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {ImgApartments, Rooms} from '../constants'
import Button from './UI/Button'
import Input from './UI/Input'

const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shemIndexedDB

const createCollectionsInIndexedDB = () => {
  if (!idb) {
    console.log('This browser doesnt support IndexedDB')
    return
  }
  console.log(idb)

  const request = idb.open('houses', 2)
  request.onerror = (event) => {
    console.log('error', event)
  }

  request.onupgradeneeded = (event) => {
    const db = request.result
    if (!db.objectStoreNames.contains('data')) {
      db.createObjectStore('data', {
        keyPath: 'id',
      })
    }
  }
  request.onsuccess = () => {
    console.log('DataBase opened successfully')
  }
}
const ProjectInnerPage = () => {
  const idproject = useLocation()
  const id = idproject.pathname.split('/')
  const title = ImgApartments.find((i) => i.id === +id[2])
  const data = Rooms.find((i) => i.id === +id[4])
  const [radio, setRadio] = useState('')
  const [values, setValues] = useState({
    buyerName: '',
    phoneNamber: '',
    date: '',
    pay: '',
  })
  const [allUsersData, setAllUsersData] = useState([])
  // const [selectedUser, setSelectedUser] = useState({})

  useEffect(() => {
    createCollectionsInIndexedDB()
    getAllDataUser()
  }, [])

  const radioOpt = [
    {value: 'Продано', id: '1', label: 'Продано'},
    {value: 'бронирован', id: '2', label: 'Бронь'},
  ]

  const getValuesHandler = (e) => {
    const value = e.target.value
    setValues({...values, [e.target.name]: value})
  }
  const radioButtonHandler = (e) => {
    setRadio(e)
  }

  const getAllDataUser = () => {
    const dbPromise = idb.open('houses', 2)
    dbPromise.onsuccess = () => {
      const db = dbPromise.result
      const tx = db.transaction('data', 'readonly')
      const data = tx.objectStore('data')
      const users = data.getAll()
      users.onsuccess = (query) => {
        setAllUsersData(query.srcElement.result)
      }
      users.onerror = (query) => {
        alert('Error occured while loading initial data')
      }
      tx.oncomplete = () => {
        db.close()
      }
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const dbPromise = idb.open('houses', 2)
    if (values.buyerName && values.phoneNamber && values.date && values.pay) {
      dbPromise.onsuccess = () => {
        const db = dbPromise.result
        const tx = db.transaction('data', 'readwrite')
        const data = tx.objectStore('data')
        const users = data.put({
          id: allUsersData.length + 1,
          values: {...values},
          radio,
        })
        users.onsuccess = () => {
          tx.oncomplete = () => {
            db.close()
          }
          getAllDataUser()
          alert('User added')
        }
        users.onerror = (event) => {
          console.log(event)
          alert('Error occured')
        }
      }
    }
  }
  const deleteHandler = (user) => {
    const dbPromise = idb.open('houses', 2)
    dbPromise.onsuccess = () => {
      const db = dbPromise.result
      const tx = db.transaction('data', 'readwrite')
      const data = tx.objectStore('data')
      const deleteUsers = data.delete(user?.id)
      deleteUsers.onsuccess = (query) => {
        alert('User deleted')
        getAllDataUser()
      }
      deleteUsers.onerror = (query) => {
        alert('Error occured while loading initial data')
      }
      tx.oncomplete = () => {
        db.close()
      }
    }
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <Wrapper>
      <LinkRout>
        <Link to="/projects">Проекты</Link> / <Link to={-1}>{title.title}</Link>
      </LinkRout>
      <Div>
        <p>{title.title}</p>
        <p>{id[3]}-й этаж</p>
        <p>квартира № {id[4]}</p>
        <span> </span>
      </Div>
      <WrapImage>
        <img width="50%" src={data.image} alt="" />
      </WrapImage>
      <WrapForm onSubmit={handleSubmit}>
        <div>
          {radioOpt.map((el) => (
            <div key={el.id}>
              <input
                name="simple"
                type="radio"
                onChange={() => radioButtonHandler(el.value)}
                id={el.id}
              />
              <label htmlFor={el.id}>{el.label}</label>
            </div>
          ))}
        </div>
        <Input
          name="buyerName"
          onChange={getValuesHandler}
          placeholder="Ф. И. О"
          value={values.buyerName}
        />
        <Input
          name="phoneNamber"
          onChange={getValuesHandler}
          placeholder="Телефон:"
        />
        <Input
          name="date"
          onChange={getValuesHandler}
          type="date"
          placeholder="Дата"
        />
        <Input name="pay" onChange={getValuesHandler} placeholder="Оплата" />
        <Button type="submit" variant="contained">
          Сохранить
        </Button>
      </WrapForm>
      <WrapResult>
        <table>
          <tbody>
            <tr>
              <th>№</th>
              <th>Ф. И. О.</th>
              <th>Телефон</th>
              <th>Оплата</th>
              <th>Дата</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
            {allUsersData?.map((el) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.values.buyerName}</td>
                <td>{el.values.phoneNamber}</td>
                <td>{el.values.pay}</td>
                <td>{el.values.date}</td>
                <td>{el.radio}</td>
                <td>
                  <Button
                    variant="deleted"
                    onClick={() => {
                      deleteHandler(el)
                    }}>
                    Удалить
                  </Button>
                  {/* <Button
                    variant="outlined"
                    onClick={(e) => {
                      setSelectedUser(el)
                      setValues({...el, [e.target.name]: el.values})
                    }}>
                    Редактировать
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </WrapResult>
    </Wrapper>
  )
}
export default ProjectInnerPage
const LinkRout = styled('div')`
  position: absolute;
  & > a {
    text-decoration: none;
    color: #002102;
    border-bottom: 0.4vh solid #002102;
    text-transform: capitalize;
  }
  margin: 0 auto;
  top: 110px;
  width: 90%;
  left: 5vw;
  font-size: 1.5vw;
  @media screen and (max-width: 700px) {
    font-size: 2.5vw;
    & > a {
      border-bottom: 0.2vh solid #002102;
    }
  }
`
const Wrapper = styled('div')`
  margin: auto;
  margin-top: 280px;
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  @media screen and (max-width: 700px) {
    margin-top: 200px;
  }
`
const Div = styled('div')`
  position: absolute;
  top: 160px;
  display: flex;
  gap: 20px;
  width: 90%;
  color: darkslategray;
  font-weight: 500;
  font-size: 2vw;
  text-transform: capitalize;
  justify-content: center;
  & > span {
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #013301a0;
    top: 50px;
    box-shadow: 0px 5px 13px 2px #013301;
    @media screen and (max-width: 700px) {
      top: 30px;
    }
  }
  @media screen and (max-width: 700px) {
    font-size: 4vw;
  }
`
const WrapImage = styled('div')`
  margin: 35px auto;
  max-width: 400px;
  text-align: center;
  img {
    width: 100%;
  }
`
const WrapForm = styled('form')`
  margin: 0 auto;
  padding: 40px 40px 0 40px;
  border: 1px solid #0b363c;
  max-width: 400px;
  height: 450px;
  border-radius: 10px;
  label {
    color: #0b363c;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div > div {
    display: flex;
  }
  > div > div:last-of-type > input {
    accent-color: #fbff00;
    margin-right: 10px;
  }
  > div > div:first-of-type > input {
    accent-color: red;
    margin-right: 10px;
  }
  > input {
    height: 35px;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    margin-top: 10%;
    border: 1px solid #0b363c;
  }
  button {
    width: 100%;
    margin-top: 10%;
    &:hover {
      color: #fff;
    }
  }
`
const WrapResult = styled('div')`
  overflow: auto;
  width: 90%;
  height: 400px;
  margin: 130px auto 0 auto;
  table {
    border-collapse: collapse;
    width: 100%;
    @media screen and (max-width: 700px) {
      width: 800px;
    }
    tbody tr th,
    td {
      padding: 10px;
      border: 1px solid #0b363c;
    }
  }
  th {
    text-align: left;
  }
  tr > td > button {
    font-size: 12px;
    height: 25px;
  }
`
