import { Row, Col, Table, Button, Tooltip , Input } from 'antd';
import * as _ from 'lodash'
import {
  PlusSquareOutlined,
  DeleteOutlined,
  TrademarkCircleFilled,
  StarOutlined,
} from '@ant-design/icons';
import React, { useState, FC ,useRef, useEffect } from 'react';

interface DataType {
  key: React.Key,
  name: string
}
interface StudentsTableData {
  data: [DataType]

}


const StudentsTable = () => {
  const [students, setStudents] = useState< DataType[] | [] >([]);
  const [newStudent, setNewStudent] = useState<string >('');
  const [ result, setResult ] = useState< DataType[] | [] >([]);
  const getRandomStudent = () => {
    const items = students.map((s)=>s.key)
    const target =items[_.random(0, items.length)]
    if(target){
      setResult([...result, students.find((s)=>s.key===target)])
    }
  }
  const getRandomFilterdStudent = () => {
    const items = students.map((s)=>s.key).filter((s)=> !result.map((s)=>s.key).includes(s))

    const target =items[_.random(0, items.length)]
    if(target){
      setResult([...result, students.find((s)=>s.key===target)])
    }
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '',
      dataIndex: 'key',
      render: (text: string) => <a><DeleteOutlined onClick={ ()=>{
        setStudents([...students.filter((s)=>s.key!==text)])
      } }/></a>,
    },
  ]
  const columnsRst = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '',
      dataIndex: 'key',
      render: (text: string) => <a><DeleteOutlined onClick={ ()=>setResult([...result.filter((s)=>s.key!==text)]) }/></a>,
    },
  ]
  const addStudent = ():void => {setStudents([...students, {key: newStudent, name: newStudent}]); setNewStudent('')};
  return (
    <Row>
      <Col span={12}>
        <div>
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 32px)' }}  placeholder="Add label" value={newStudent} onChange={(e)=> setNewStudent(e.target.value)} onPressEnter={addStudent}/>
            <Tooltip title="Add label">
              <Button type="primary" shape="circle" icon={ <PlusSquareOutlined /> } onClick={addStudent} />
            </Tooltip>
          </Input.Group>
        </div>
        <div>
          <Table
            // rowSelection={{
            //   type: 'checkbox',
            // }}
            columns={columns}
            dataSource={students}
          />
        </div>
      </Col>
      <Col span={1}></Col>
      <Col span={11}>
        <Button type="primary" shape="circle" icon={ <TrademarkCircleFilled /> } onClick={getRandomStudent} />
        <Button type="primary" shape="circle" icon={ <StarOutlined /> } onClick={getRandomFilterdStudent} />
        
        <Table
            // rowSelection={{
            //   type: 'checkbox',
            // }}
            columns={columnsRst}
            dataSource={result}
          />
      </Col>
    </Row>
 
 

  )
}

const RadomStudents = () => {

  return (

      <StudentsTable />

  )
}


export default RadomStudents;