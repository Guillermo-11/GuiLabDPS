"use client"
import React, { useState } from 'react'
import Compra from './Compra'
import styles from "../app/page.module.css"

const Carrito = () => {
    const [compra, setCompra] = useState({
        producto: '',
        marca: '',
        cantidad: '',
        precio: ''
    })

    const [compras, setCompras] = useState([]);

    const [total, setTotal] = useState(0);

    const handleChange = e => {
        setCompra(compra => ({ ...compra, [e.target.name]: e.target.value }));
    }

    const handleClick = e => {
        e.preventDefault();
        const { producto, marca, cantidad, precio } = compra;

        if (producto.trim() === '') {
            alert('el campo NOMBRE no puede ser vacío');
            return;
        }
        if (marca.trim() === '') {
            alert('el campo MARCA no puede ser vacío');
            return;
        }
        if (cantidad.trim() === '') {
            alert('el campo no CANTIDAD puede ser vacío');
            return;
        }
        if (precio.trim() === '') {
            alert('El campo PRECIO no puede ser vacío');
            return;
        }
        
        if (isNaN(cantidad) || isNaN(precio)) {
            alert('Los campos CANTIDAD y PRECIO deben ser números');
            return;
        }

        if (parseFloat(cantidad) <= 0 || parseFloat(precio) <= 0) {
            alert('Los campos CANTIDAD y PRECIO deben ser mayores a 0');
            return;
        }

        setCompras([...compras, compra]);

        const subTotal = total + (parseFloat(cantidad) * parseFloat(precio));
        setTotal(subTotal);

        setCompra({
            producto: '',
            marca: '',
            cantidad: '',
            precio: ''
        });
    }

    const deleteCompra = indice => {
        const newCompras = [...compras];
        const newTotal = total - (parseFloat(newCompras[indice].cantidad) * parseFloat(newCompras[indice].precio));
        setTotal(newTotal);
        newCompras.splice(indice, 1);
        setCompras(newCompras);
    }

    return (
        <>
            <br/>
            <h2>Agregar Productos</h2>
            <form onSubmit = {e=>e.preventDefault()} className={styles.form}>
                <div className={styles.form_group}>
                    <label className={styles.titulos_form}>Nombre:</label>
                    <input className={styles.form_input} type="text" name='producto' onChange={handleChange}/>
                </div>

                <div className={styles.form_group}>
                    <label className={styles.titulos_form}>Marca:</label>
                    <input className={styles.form_input} type="text" name='marca' onChange={handleChange} />
                </div>

                <div className={styles.form_group}>
                    <label className={styles.titulos_form}>Cantidad:</label>
                    <input className={styles.form_input} type="text" name='cantidad' onChange={handleChange} />
                </div>

                <div className={styles.form_group}>
                    <label className={styles.titulos_form}>Precio:</label>
                    <input className={styles.form_input} type="text" name='precio' onChange={handleChange} />
                </div>
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>

            <table className={styles.tabla}>
                <thead className={styles.thead}>
                    <tr>
                        <th className={styles.titulos_tabla}>Producto</th>
                        <th className={styles.titulos_tabla}>Marca</th>
                        <th className={styles.titulos_tabla}>Cantidad</th>
                        <th className={styles.titulos_tabla}>Precio</th>
                        <th className={styles.titulos_tabla}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        compras.map((value, index) => (
                            <Compra Compra={value} index={index} key={index} deleteCompra={deleteCompra}/>
                        ))
                    }

                    <tr className={styles.filas}>
                        <td colSpan="3" className={styles.celdas}>Total</td>
                        <td className={styles.celdas}>
                            ${ total.toFixed(2) }
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )

    /*const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        { todo: 'todo 1' },
        { todo: 'todo 2' },
        { todo: 'todo 3' }
    ])
    const handleChange = e=>setTodo({[e.target.name]:e.target.value})
    const handleClick = e=> {
        if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede ser vacío')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo=indice=>{
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit = {e=>e.preventDefault()}>
                <label>Agregar Tarea</label> <br/>
                <input className={styles.form_input} type="text" name='todo' onChange={handleChange} />
                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>

            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} index={index} key={index} deleteTodo={deleteTodo}/>
                ))
            }
        </>
    );-*/
}

export default Carrito