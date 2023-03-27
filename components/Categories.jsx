import React, { useEffect, useState } from "react";
import categoryData from "../api/categories.json";
import Category from "../components/ui/Category";
import Title from "./ui/Title";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //istek at ve kategorileri al ve setCategories ile state'i güncelle
    // setTimeout(() => setCategories(categoryData), 1000);
    setCategories(categoryData);
  }, []);
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-12">
          {/* {!categories.length && "Yükleniyor.."} */}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
