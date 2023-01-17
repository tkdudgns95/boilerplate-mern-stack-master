import React from 'react'
import "./UserCardBlock.css"
function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map((product,index) => (
            <tr key ={index}>
                <td>
                    <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} />
                </td>
                <td>
                    {product.quantity} EA
                </td>
                <td>
                    $ {product.price}
                </td>
                <td>
                    <button onClick={() => props.removeItem(product._id)}>
                        Remove 222
                    </button>
                </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thread>
                    <tr>
                        <th>Product Image</th>
                        <th>Product quantity</th>
                        <th>Product Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thread>

                <tbody>

                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock