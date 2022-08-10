import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { read } from '../../../api/productApi';
import Header from '../../../components/header'
import { updateProduct } from '../../../features/products/product.slice';

type Props = {}

const EditProduct = (props: Props) => {
  const router = useRouter();
  const { id } = router.query
  const dispatch = useDispatch();
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  useEffect(() => {
    const getListProduct = async () => {
        const { data } = await read(id);
        reset(data);
    }
    getListProduct();
}, []);
  const onSubmit = (data : any) => {
    dispatch(updateProduct(data))
  }
  return (
    <div>
      <Header />
      EditProduct
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name </label>
        <input placeholder='Name' type="text" {...register("name", { required: true })} />
        <br />
        <label> Price </label>
        <input placeholder='Price' type="number" {...register("price", { required: true })} />
        <br />
        <button type="submit"> Update Product </button>
      </form>
    </div>
  )
}

export default EditProduct
