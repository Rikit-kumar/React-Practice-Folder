import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  let throttling = false;

  const getProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error in Get product Api", error);
    }
  };

  const searchProduct = () => {
    console.log("fnc running");

    let result = products.filter((val) =>
      val.title.toLowerCase().includes(searchData.toLowerCase()),
    );

    setProducts(result);
  };

  // Debouncing
  useEffect(() => {
    if (!searchData) return;

    let timeout = setTimeout(() => {
      searchProduct();
    }, 700);

    return () => clearInterval(timeout);    
  }, [searchData]);


  // Throttling
  useEffect(()=>{

    let handleScroll = ()=>{

        if(throttling) return;

        throttling = true;
        console.log('Throttling Trigger')
        setScrollY(window.scrollY);

        setTimeout(() => {
            throttling = false
        }, 5000);
    }

    window.addEventListener("scroll", handleScroll)

    return ()=> window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="ml-5 mt-5">
      <div className="flex items-center gap-20">
        <h1 className="mb-4 text-xl font-semibold ">Debouncing...</h1>

        <input
          type="text"
          placeholder="Search..."
          className="p-4 border-1 rounded-xl mb-5"
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>

      {products.map((val) => {
        return (
          <h1 key={val.id} className="text-2xl mb-2">
            {" "}
            {val.title}{" "}
          </h1>
        );
      })}
    </div>
  );
};

export default HomePage;
