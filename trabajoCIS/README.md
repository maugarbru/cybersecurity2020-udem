# Trabajo Control de CIS: _Email and Web Browser Protections_

## Contenido:

- [¿En qué consiste el control?](#que)
- [¿Cuál es la importancia del control?](#cual)
- [¿Con cuál(es) otro(s) control(es) se relaciona?](#cuales)
- [¿Cómo se relaciona con el(los) otro(s) control(es)?](#como)
- [El por qué de dicha relación](#porque)
- [¿Cómo, al aplicar el contol, se mejora la postura de seguridad?](#mejora)
- [Referencias](#referencias)

---

### Que

## ¿En qué consiste el control?

Minimizar la superficie de ataque y la oportunidad para atacantes de manipular el
comportamiento humano a través de su interacción con navegadores web y sistemas de
correo electrónico.

---

### Cual

## ¿Cuál es la importancia del control?

Los navegadores web y los clientes de correo electrónico son puntos de entrada y ataque
muy comunes debido a su complejidad técnica, flexibilidad y su interacción directa con los
usuarios y con los otros sistemas y sitios web. El contenido puede diseñarse para atraer o
engañar a los usuarios para que tomen medidas que aumenten en gran medida el riesgo y
permitan la introducción de códigos maliciosos, la pérdida de datos valiosos y otros ataques.
Dado que estas aplicaciones son el principal medio para que los usuarios interactúen con
entornos que no son de confianza, estos son objetivos potenciales tanto para la explotación
del código como para la ingeniería social.

---

### Cuales

## ¿Con cuál(es) otro(s) control(es) se relaciona?

- Control 2: Inventario de software autorizado y no autorizado.
- Control 5: Configuración segura para hardware y software en dispositivos móviles, portátiles, estaciones de trabajo y servidores.
- Control 16: Monitorización y control de cuentas.

---

### Como

## ¿Cómo se relaciona con el(los) otro(s) control(es)?

Con el control 2 y el 5, se relaciona de forma indirecta. Los controles 2 y 5 son de categoría "Basic", mientras que el Control 7 es de categoría "Foundational". Éstos dos están relacionado más que todo con la parte de conocer y mantener un control riguroso del inventario de herramientas que se poseen y usan en la organización.

Con el control 16 es un poco más directa la relación debido a que ambos controles son "Foundational" y se aplica la seguridad directamente en las cuentas cuentas que se utilizan dentro de la organización.

---

### Porque

## El por qué de dicha relación

Relacionado con el Control 2: existe un subprotocolo del 7 que dice _"Asegúrese de que solo los navegadores web y los clientes de correo electrónico que cuenten con soporte completo puedan ejecutarse en la organización, idealmente solo con la última versión de los navegadores y clientes de correo electrónico proporcionados por el proveedor."_
Esto pues indica que esos navegadores web deben estar registrados en el inventario de software autorizado, teniendo en cuenta la versión y el soporte del proveedor.

Relacionado con el Control 5: teniendo en cuenta el mismo subprotocolo mencionado anteriormente, el Control 5 busca realizar una configuración segura en los dispositivos, lo que permite que se eliminen o bloqueen los navegadores no autorizados en esos equipos, además teniendo en cuenta otro subprotocolo que dice _"Desinstalar o deshabilitar cualquier plugin o aplicación add-on para navegador o cliente de correo electrónico no autorizados."_

Relacionado con el Control 16: el control de cuentas es muy importante en los clientes de correos electrónicos, asi que aquí se necesita que se esté monitorizando y controlando las cuentas como dice el control 16 y teniendo en cuenta subprotocolos del 7, como: _"Filtros de URL, filtros de DNS, verificar la política de Autenticación, Reporte y Conformidad de mensajes basada en dominio (Domain-based Message Authentication, Reporting and Conformance - DMARC), archivos adjuntos de correo electrónico, entre otros."_

---

### Mejora

## ¿Cómo, al aplicar el contol, se mejora la postura de seguridad?

Se mejora ampliamente la seguridad, porque el correo electrónico y los navegadores web suelen ser muy usados. 
La comunicación entre dependencias, empleados y departamentos dentro de una organización suele hacerse a través del email, lo que pone en riesgo el flujo de información delicada tanto de manera interna como externa. 
Además son muy comunes los ataques a traves de suplantación de empresas de terceros y de ingeniería social a través de éste medio.
En cuanto a la web, normalmente es el acceso constante a internet, lo que sin control, puede hacerse a sitios peligrosos que sin debido cuidado pueden crear brechas de seguridad bastante delicadas.

Téngase en cuenta que lo más seguro es que ambas dependencias (email y navegador web) pertenecen a terceros que suelen ser muy grandes, y que quizá el soporte no pueda ser tan personalizado como se quisiera, por lo que una buena configuración y conocimiento sobre éstas herramientas se hace fundamental a la hora de querer implementar este protocolo de seguridad en una organización.

---

### Referencias

## Referencias bibliográficas

- CIS: Center for Internet Security (https://www.cisecurity.org/controls/email-and-web-browser-protections/)
- CERT-PY: Centro de Respuestas ante Incidentes Cibernéticos - Paraguay (https://www.cert.gov.py/application/files/7415/3625/3112/CIS_Controls_Version_7_Spanish_Translation.pdf)
- Blog de iSecAuditors (https://blog.isecauditors.com/2019/11/novedades-version-7-1-controles-cis.html)
