function Product ({ item, handleAddToCart }) {
    return (
        <div className="item" key={item.id}>
          <h3 className="text-3xl font-bold underline m-4">{item.name}</h3>
          <div class="flex justify-center items-center">
            <img class="h-60 w-60 rounded-full " src={item.img} alt="image description" />
          </div>
          <p className="mt-4 mb-4">{`${item.cost}Inr per item`}</p>
          <button onClick={() => handleAddToCart(item)} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
        </div>
    )
}

export default Product;