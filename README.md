# Formulario para clientes.

## Instrucciones

1. Asegurarse de tener docker instalado
2. Crear la imagen de docker

```
docker build -t form-client-app .
```

3. Verificar que se creo la imagen (Opcional)

```
docker images
```

4. Ejecutar la imagen

```
docker run -p 5173:5173 form-client-app
```
