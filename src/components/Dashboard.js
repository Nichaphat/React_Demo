import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import { Form, Button, Card, Alert } from "react-bootstrap"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
        <Card.Title className="text-center">ฉลากยา</Card.Title>
    <Form.Group>
    <Form.Control type="text" placeholder="ชื่อยา" />
  <br />
  <Form.Control type="text" placeholder="ข้อบ่งใช้" />
  <br />
  <Form.Row></Form.Row>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">วิธีการรับประทาน</option>
    <option value="1">รับประทานครั้งละ 1 เม็ด</option>
    <option value="2">รับประทานครั้งละ 2 เม็ด</option>
  </Form.Control>
  <br />
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">วิธีการรับประทาน</option>
    <option value="1">วันละ 1 ครั้ง</option>
    <option value="2">วันละ 2 ครั้ง</option>
    <option value="2">วันละ 3 ครั้ง</option>
    <option value="2">วันละ 4 ครั้ง</option>
  </Form.Control>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">วิธีการรับประทาน</option>
    <option value="1">ก่อนอาหาร</option>
    <option value="2">หลังอาหาร</option>
    <option value="2">ก่อนนอน</option>
  </Form.Control>
  <br />
  <Form >
  <Form.Label >ช่วงเวลาการรับประทาน</Form.Label>
  {['radio'].map((type) => (
    <div key={`custom-inline-${type}`} className="mb-4">
      <Form.Check
        custom
        inline
        label="เช้า"
        type={type}
        id={`custom-inline-${type}-1`}
      />
      <Form.Check
        custom
        inline
        label="กลางวัน"
        type={type}
        id={`custom-inline-${type}-2`}
      />
      <Form.Check
        custom
        inline
        label="เย็น"
        type={type}
        id={`custom-inline-${type}-3`}
      />
        <Form.Check
        custom
        inline
        label="ก่อนนอน"
        type={type}
        id={`custom-inline-${type}-4`}
      />
    </div>
    
  ))}
</Form>
  <Form.Control type="text" placeholder="คำแนะนำ" />
</Form.Group>
<Button variant="info" type="submit" className="w-100"  >เพิ่มข้อมูล</Button>
</Card.Body>
</Card>
<div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
  </>
  )
}
