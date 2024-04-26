// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import ServiceCard from "@/components/ServiceCard";
import React from "react";
// import { IService } from "../../type";
import { services } from "../../data";

const Index = () => {
  return (
    <div
      className="flex flex-col px-8 pt-1 flex-grow
    "
    >
      <h4
        className="font-medium text-justify bg-gradient-to-r from-pink-200 to-blue-300 items-center px-10 py-3 flex-grow rounded-lg"
        style={{ marginLeft: "-3rem", marginRight: "-3rem" }}
      >
        I am a bachelor's degree graduate majoring in <b>Physics</b>, Faculty of
        Mathematics and Natural Sciences, Hasanuddin University, majoring in
        theoretical and computational physics, doing research on machine
        learning. I worked as a helper at a contractor company, in marketing at
        a licensing company, as a freelance data entry worker, and now I've
        switched careers to web development..
      </h4>
      <div
        className="flex-grow p-4 mt-1 rounded-lg"
        style={{
          marginLeft: "-2.5rem",
          marginRight: "-2.5rem",
        }}
      >
        <h6 className="my-3 text-xl font-bold">What I offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div className="lg:col-span-1 bg-blue-100 rounded-lg">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
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

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("server", data.services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
