import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Header from '../../../components/header';
import { createProduct } from '../../../features/products/product.slice';

type Props = {}

const CreateProduct = (props: Props) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => {
        dispatch(createProduct(data)); 
    }
    return (
        <div>
            <Header />
            CreateProduct
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Name </label>
                <input placeholder='Name' type="text" {...register("name",{ required: true })} />
                <br />
                <label> Price </label>
                <input placeholder='Price' type="number" {...register("price",{ required: true })} />
                <br />
                <button type="submit"> Create Product </button>
            </form>

        </div>
    )
}

export default CreateProduct