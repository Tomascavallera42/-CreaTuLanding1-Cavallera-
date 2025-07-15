const services = [
    {
        id: 1,
        name: "Fumigacion",
        description: "Desinfeccion de aplio esperctro",
        img:"/img/desinfec.jpg",
        category: "Desinsectacion",
    },

    {
        id: 2,
        name: "Control de roedores",
        description: "Control y exterminio de roedores",
        img:"/img/roedor.jpg",
        category: "Control de plagas",
    },
    {
        id: 3,
        name: "Mantenimiento de jardin",
        description: "Mantenimiento y cuidados de jardin exterior e interior",
        img: "/img/jardin.jpg",
        category: "Limpieza",
    },

]
const getServicios = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(services); }, 2000);





    }

    );

}
export default getServicios;