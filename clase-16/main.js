const obj = {
  nombre: 'Alfredo',
  apellidos: 'Caseros',
  edad: '62',
}
const productosTecnologia = [
  {
    nombre: "Smartphone X200",
    marca: "TechPlus",
    precio: 799.99,
    procesador: "Octa-Core 2.8 GHz",
    pantalla: "6.5 pulgadas AMOLED",
    almacenamiento: "128 GB",
    camara: "64 MP + 12 MP",
  },
  {
    nombre: "Laptop Pro 14",
    marca: "NextGen",
    precio: 1299.99,
    procesador: "Intel i7 11ª Gen",
    pantalla: "14 pulgadas Retina",
    almacenamiento: "512 GB SSD",
    ram: "16 GB DDR4",
    grafica: "NVIDIA RTX 3050",
  },
  {
    nombre: "Smartwatch Active 4",
    marca: "WellFit",
    precio: 249.99,
    procesador: "Dual-Core 1.2 GHz",
    pantalla: "1.4 pulgadas AMOLED",
    resistencia: "50m resistente al agua",
    bateria: "Hasta 7 días",
    sensores: ["Frecuencia cardíaca", "Oxígeno en sangre"],
  },
  {
    nombre: "Auriculares Wireless Max",
    marca: "SoundSphere",
    precio: 199.99,
    tipo: "Inalámbricos",
    cancelacionRuido: true,
    autonomia: "30 horas",
    conectividad: "Bluetooth 5.3",
    compatibilidad: ["iOS", "Android", "PC"],
  },
  {
    nombre: "Cámara Mirrorless V500",
    marca: "PhotoCraft",
    precio: 899.99,
    sensor: "APS-C 24 MP",
    video: "4K a 60 fps",
    conectividad: "WiFi y Bluetooth",
    pantalla: "3 pulgadas táctil",
    lenteIncluido: "18-55mm",
  },
  {
    nombre: "Tablet VisionTab 12",
    marca: "TechWave",
    precio: 599.99,
    procesador: "Octa-Core 2.6 GHz",
    pantalla: "12 pulgadas IPS",
    almacenamiento: "256 GB",
    ram: "8 GB",
    camara: ["13 MP trasera", "8 MP frontal"],
  },
  {
    nombre: "Monitor UltraView 27",
    marca: "ViewMaster",
    precio: 349.99,
    tamanio: "27 pulgadas",
    resolucion: "4K UHD",
    tasaRefresco: "144 Hz",
    puertos: ["HDMI", "DisplayPort", "USB-C"],
    tecnologia: "IPS con HDR10",
  },
  {
    nombre: "Router SmartNet AX3000",
    marca: "LinkTech",
    precio: 129.99,
    tecnologia: "WiFi 6",
    puertos: "4 LAN, 1 WAN",
    velocidadMaxima: "3000 Mbps",
    seguridad: "WPA3",
    antenas: "4 antenas externas",
  },
  {
    nombre: "Teclado Mecánico RGB Pro",
    marca: "KeyPower",
    precio: 99.99,
    tipo: "Mecánico",
    retroiluminacion: "RGB personalizable",
    switches: "Cherry MX Red",
    conectividad: "Cable USB-C",
    extras: ["Reposamuñecas", "Teclas multimedia"],
  },
  {
    nombre: "Mouse Gaming GX9",
    marca: "FastClick",
    precio: 49.99,
    dpi: "16,000",
    botones: "8 programables",
    conectividad: "Cable USB",
    retroiluminacion: "RGB personalizable",
    disenio: "Ergonómico para diestros",
  },
  {
    nombre: "Consola de Videojuegos PlayZ 5",
    marca: "GameStudio",
    precio: 499.99,
    almacenamiento: "825 GB SSD",
    resolucion: "Hasta 8K",
    cpu: "Octa-Core 3.5 GHz",
    gpu: "RDNA 2 personalizada",
    conectividad: ["WiFi 6", "Bluetooth 5.1"],
  },
  {
    nombre: "Bocina Portátil BoomBass 360",
    marca: "SoundCore",
    precio: 129.99,
    potencia: "30W",
    bateria: "15 horas",
    resistencia: "IPX7 (sumergible)",
    conectividad: "Bluetooth 5.0",
    extras: ["Emparejamiento estéreo", "Manos libres"],
  },
  {
    nombre: "Dron SkyExplorer Pro",
    marca: "FlyTech",
    precio: 799.99,
    camara: "4K UHD con gimbal de 3 ejes",
    autonomia: "25 minutos",
    rango: "5 km",
    gps: "Integrado",
    modosVuelo: ["Follow Me", "Waypoint", "Círculo"],
  },
  {
    nombre: "Televisor SmartTV XQ80",
    marca: "ViewSmart",
    precio: 1199.99,
    tamanio: "65 pulgadas",
    resolucion: "4K UHD",
    hdr: "Dolby Vision y HDR10+",
    sistemaOperativo: "Android TV",
    puertos: ["3 HDMI", "2 USB", "Ethernet"],
  },
  {
    nombre: "Cámara de Seguridad HomeGuard 360",
    marca: "SafeNet",
    precio: 149.99,
    resolucion: "1080p Full HD",
    visionNocturna: "Hasta 10 metros",
    conectividad: "WiFi",
    almacenamiento: ["MicroSD", "Cloud"],
    extras: ["Audio bidireccional", "Detección de movimiento"],
  }
];


// FUNCIONES 

const resaltarPrecio = (elementoHTML) => {
  elementoHTML.classList.add('oferta')
}

const addPalabraOferta = (stringPrecio) => stringPrecio.concat(' OFERTA')

function agregarSignoDolar(precio) {
  let signo = '$ '
  // UNA OPCIÓN
  // return signo.concat(precio)

  // OTRA OPCIÓN
  // return '$ '.concat(precio)

  return `$ ${precio}`;
}

// Contenedor
const container = document.querySelector('.container');

for (let producto of productosTecnologia) {
  // CREAMOS UNA CARD POR CADA PRODUCTO DEL ARRAY productosTecnologia (son 5)
  const div = document.createElement('div');
  div.classList.add('card');

  // TITULOS PARCA CADA CARD
  const title = document.createElement('h2')
  title.textContent = producto['nombre'].toUpperCase()

  div.append(title)

  console.log(`Nombre: ${producto['nombre'].toUpperCase()}`)

  delete producto['nombre']

  for (let keysProducto in producto) {
    const p = document.createElement('p')

    if (keysProducto === 'precio') {
      const precioConSigno = agregarSignoDolar(producto[keysProducto])

      if (Number(producto[keysProducto]) < 300) {
        resaltarPrecio(p)
        p.textContent = addPalabraOferta(precioConSigno)

      } else {
        p.textContent = precioConSigno
      }

    } else if (Array.isArray(producto[keysProducto])){
      console.log(producto[keysProducto])
      console.log(`Si es: ${producto[keysProducto]}`)
      const convertirArrayEnString = producto[keysProducto].join(' - ')
      p.textContent = `${keysProducto}: ${convertirArrayEnString}`
    } 
    else {
      p.textContent = `${keysProducto}: ${producto[keysProducto]}`
    }

    div.append(p)
  }

  const anchor = document.createElement('a')
  anchor.setAttribute('href', 'https://www.google.com')
  anchor.textContent = 'Ver más'
  div.append(anchor)
  // console.log('---------------------------------------')

  // ESTA LINEA AGREGAR LA CARD AL HTML
  container.append(div);
}

// EJEMPLO
// console.log(productosTecnologia[0])
// const smartphone = productosTecnologia[0]
// const div = document.createElement('div');
// div.classList.add('card');

// for (keysProducto in smartphone) {
//     console.log(` ${keysProducto}->${smartphone[keysProducto]}`)
//     let elemento = document.createElement('span');
//     elemento.textContent = `${keysProducto}: ${smartphone[keysProducto]}`
//     div.append(elemento)
// }
// container.append(div);

// const numeros = [1, 2, 3, 4, 5, 6]
// const numeros2 = [1, 2, 3, 4, 5, 6, 8, 0, 9]

// for(let numero of numeros) {
//     console.log(numero)
// }
// console.log('-------------------')
// for(let numero of numeros2) {
//     console.log(numero)
// }

// EJEMPLO REPASO DE STRING
let hola = 'hola'
let precioSinSigno = '2000'
console.log(`$ ${precioSinSigno}`)

console.log(hola.concat('?'))

