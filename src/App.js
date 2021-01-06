import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import people from './people.js'
import React, { useState } from "react"
import { Form, FormGroup, Label, Input, FormText, Button, Container, Jumbotron, Row, Col } from 'reactstrap'

const App = () => {
  const [persons, setPersons] = useState(people)

  const editorSort = () => {
    // const newPeople = persons.filter( (p) => {
    //   return p.first_name === "Don"
    // })
    // setPersons(newPeople)

    const newPeople = persons.filter((p) => {
      return p.email.split('@')[1].split('.')[0] === "google"
    })
    setPersons(newPeople)

    // setPersons([{ first_name:"test" }])
  }

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Title',
      accessor: 'title'
    },
  ]

  return (
    <>
      <ReactTable
        data={persons}
        columns={columns} />
      <Container>
        <Row xs='4'>
          <Col>
            <Button color='info' onClick={editorSort}>Email = Google</Button>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleSearch">By Last Name</Label>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Last Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleSearch">By Email</Label>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Email"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleSearch">By Title</Label>
              <Input
                type="search"
                name="search"
                // value={this.state.search}
                id="exampleSearch"
                placeholder="Title"
              />
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
