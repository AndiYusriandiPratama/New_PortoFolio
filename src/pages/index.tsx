import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { IService } from "../../type";
import { services } from "../../data";

const Index = ({ services }: { services: IService[] }) => {
  console.log("Client", services);

  return <div>index</div>;
};

export default Index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // calculation

//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("server", data.services); // Perbaikan: menggunakan data.services bukan services

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  console.log("server", data.services);

  return {
    props: {
      services: data.services,
    },
  };
};
