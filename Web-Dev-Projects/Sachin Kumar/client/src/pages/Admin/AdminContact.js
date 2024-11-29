import React from 'react'
import { Form, message  } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { ShowLoading,HideLoading } from "../../redux/rootSlice"
import axios from 'axios'
import API_URL from '../../config';
function AdminContact() {

  const {portfolioData } = useSelector(state => state.root);
  const dispatch = useDispatch();
  const instance = axios.create({
    baseURL: API_URL,
  });
  const onFinish= async (values)=>{
    try {
      dispatch(ShowLoading())
      const response = await instance.post("/update-contact",{
        ...values,
        _id:portfolioData.contact._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message)
      }
      else{
        message.error(response.data.message)
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message)
    }
  };

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.contact} >
        
        <Form.Item name="name" label='Name' >
          <input placeholder='Name' />
        </Form.Item>
        <Form.Item name="gender"  label='Gender'>
          <input placeholder='Gender' />
        </Form.Item>
        <Form.Item name="email"  label='Email'>
          <input placeholder='Email' />
        </Form.Item>
        <Form.Item name="Address"  label='Address'>
          <input placeholder='Address' />
        </Form.Item>
        <div className='flex justify-end w-full'> 
          <button className='px-10 py-2 bg-primary text-white rounded-md' type='submit' >Save</button>
        </div>
      </Form>

    </div>
  )
}

export default AdminContact