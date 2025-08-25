# 🎁 Amigo Secreto 

<p align="center">
  <a href="https://developer.mozilla.org/es/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  </a>
  <a href="https://developer.mozilla.org/es/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  </a>
  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  </a>
</p>

**Amigo Secreto** es una aplicación web interactiva que permite organizar sorteos de manera fácil y divertida. Los usuarios pueden agregar participantes y realizar un sorteo aleatorio con validaciones y animaciones.
El proyecto forma parte del challenge de **Alura Latam** y **Oracle ONE**, diseñado para reforzar la **lógica de programación con JavaScript**.

## 🌟 Características

- Interfaz de usuario intuitiva y responsive  
- Validación de nombres en tiempo real  
- Sorteo aleatorio sin repeticiones  
- Animaciones durante el proceso de sorteo  
- Compatible con diferentes dispositivos  

## 🛠️ Funcionalidades

### 1. Gestión de participantes

- Agregar nombres mediante un campo de texto y botón "Añadir"
- Visualización instantánea de la lista de participantes
- Validaciones de entrada:
  - No se permiten campos vacíos
  - Solo se aceptan letras y espacios
  - Se permiten acentos y ñ (ejemplo: "María", "Señor")
  - No se permiten números ni caracteres especiales
  - No se permiten nombres duplicados

### 2. Sistema de sorteo

- Botón "Sortear amigo" para iniciar el proceso
- Animación de spinner durante el sorteo
- Revelación dramática del resultado
- Sistema que asegura que:
  - Nadie sea su propio amigo secreto
  - Cada participante recibe y es recibido como amigo secreto
  - El proceso es completamente aleatorio

## 🎨 Interfaz de usuario

La aplicación cuenta con:

- Header con título y logo
- Sección de entrada de datos
- Lista de participantes
- Sección de resultados
- Botones con efectos hover
- Animaciones suaves para mejor experiencia de usuario

## 🔍 Validaciones implementadas

```javascript
// Ejemplos de nombres válidos:
María
Juan Pablo
José Martínez
Señora López

// Ejemplos de nombres no válidos:
Juan123 (contiene números)
María@ (contiene caracteres especiales)
Pedro_García (contiene guión bajo)
"" (vacío)
```

## 💡 Lógica de programación implementada

- **Arrays**: Almacenamiento y manipulación de la lista de participantes
- **Map**: Gestión de emparejamientos en el sorteo
- **Funciones**: Modularización del código
- **Async/Await**: Manejo de animaciones y tiempos
- **Event Listeners**: Interacción con el usuario
- **Expresiones Regulares**: Validación de nombres
- **Condicionales**: Lógica de validación y sorteo
- **DOM Manipulation**: Actualización dinámica de la interfaz

## 📝 Código Ejemplo

```javascript
// Validación de nombres
function validarNombre(nombre) {
  if (!nombre || nombre.trim() === "") {
    alert("Por favor, ingrese un nombre válido");
    return false;
  }

  const patronNombre = /^[a-záéíóúñüA-ZÁÉÍÓÚÑÜ\s]+$/;
  if (!patronNombre.test(nombre)) {
    alert("El nombre solo debe contener letras y espacios");
    return false;
  }

  return true;
}
```

## ⭐​ Insignia de logro

Insignia de logro por completar el challenge **Amigo Secreto**

<p align="center">
  <img src="./assets/insignia.webp" alt="Vista de insignia" width="100"/>
</p>

