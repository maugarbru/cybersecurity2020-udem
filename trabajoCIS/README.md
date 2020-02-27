# Trabajo Control de CIS: _Email and Web Browser Protections_

## Informe del control:

- [¿En qué consiste el control?](#que)
- [¿Cuál es la importancia del control?](#cual)
- [¿Con cuál(es) otro(s) control(es) se relaciona?](#cuales)
- [¿Cómo se relaciona con el(los) otro(s) control(es)?](#como)
- [El por qué de dicha relación](#porque)
- [¿Cómo, al aplicar el contol, se mejora la postura de seguridad?](#mejora)
- [Referencias](#referencias)

## Informe de la herramienta:

- [Explicación detallada de la licencia.](#licencia)
- [Requerimientos técnicos detallados.](#requerimientos)
- [Comparación con al menos una herramienta comercial.](#comparacion)
  > 1. Pros y contras.
  > 2. Diferencia en el licenciamiento.

---

### Que

## ¿En qué consiste el control?

Básicamente consiste en aplicarle una capa más a la seguridad en el acceso a navegadores web y a los clientes de correo electrónico, para así, hacer un control de seguridad más exhaustivo de cara a los agentes externos malintencionados que pueden hacer daño a la compañía.

Está caracterizado por el control de navegadores, usando sólo los seguros, eliminando los que no se usen, manteniéndolos en la última versión, eliminado add-ons y plugins innecesarios. Controlar los clientes de correo electrónico, limitando a remitentes de correo seguros, el bloqueo de envío y recepción de archivos maliciosos, usando también versiones más actualizadas y con soporte activo del proveedor.

Por definición, consiste en: _"Minimizar la superficie de ataque y la oportunidad para atacantes de manipular elcomportamiento humano a través de su interacción con navegadores web y sistemas de correo electrónico."_

---

### Cual

## ¿Cuál es la importancia del control?

Los navegadores web y los clientes de correo electrónico son puntos de entrada y ataque
muy comunes debido a su complejidad técnica, flexibilidad y su interacción directa con los
usuarios y con los otros sistemas y sitios web.

Para la mayoría de usuarios, la cara visible de la informática es Internet. Desde todo tipo de dispositivos (ordenadores, tabletas y smartphones) accedemos a la red en busca de información, entretenimiento y otros servicios.
En cuanto a la seguridad de Email, hay que tener en cuenta que vía email se realizan grandes canales de comunicación interna de la organización, por lo que la información compartida puede ser confidencial y sensible, además el correo electrónico en muchas ocasiones representa una credencial de acceso a sistemas internos e, incluso, operaciones bancarias.

Estas prestaciones son muy útiles, pero debemos tener en cuenta que los navegadores son empleados también por individuos malintencionados para acceder a nuestros dispositivos. Por ello, hemos de conocer sus riesgos y adoptar precauciones para poder disfrutar de las ventajas de la tecnología de forma segura.
Dado que estas aplicaciones son el principal medio para que los usuarios interactúen con
entornos que no son de confianza, estos son objetivos potenciales tanto para la explotación
del código como para la ingeniería social.

El contenido puede diseñarse para atraer o engañar a los usuarios para que tomen medidas que aumenten en gran medida el riesgo y
permitan la introducción de códigos maliciosos, la pérdida de datos valiosos y otros ataques.

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

Téngase en cuenta que lo más probable es que ambas dependencias (email y navegador web) pertenecen a terceros que suelen ser muy grandes, y que quizá el soporte no pueda ser tan personalizado como se quisiera, por lo que una buena configuración y conocimiento sobre éstas herramientas se hace fundamental a la hora de querer implementar este protocolo de seguridad en una organización.

---

### Referencias

## Referencias bibliográficas

- CIS: Center for Internet Security (https://www.cisecurity.org/controls/email-and-web-browser-protections/)
- CERT-PY: Centro de Respuestas ante Incidentes Cibernéticos - Paraguay (https://www.cert.gov.py/application/files/7415/3625/3112/CIS_Controls_Version_7_Spanish_Translation.pdf)
- Blog de iSecAuditors (https://blog.isecauditors.com/2019/11/novedades-version-7-1-controles-cis.html)

---

# Herramienta

---

### Licencia

## Explicación detallada de la licencia.

- Para email:
 ### Proxmox Mail Gateway
> Comprehensive Open-Source Email Security Platform
> Es una solución open-source de seguridad de correo electrónico que ayuda a proteger el servidor-cliente de correo electrónico de todas las amenazas en el momento que aparecen.
> Su arquitectura flexible con su modelo amigable con el usuario, su interfaz de manejo basado en la web, permite a los profesionales de TI y administradores acceder al control de 
> todos los email recibidos y enviados con un facilidad para proteger a los usuarios de spam, virus, troyanos y espionaje.

- Para navegador web:
 ### e2guardian
> Es un proxy de filtrado de contenido que puede funcionar de forma independiente o junto con otro proxy de almacenamiento en caché, como Squid u Oops. Fuerte y potente, con una arquitectura masivamente multiproceso diseñada para miles de usuarios simultáneos
> e2guardian es un filtro de contenido web de código abierto, filtra el contenido real de las páginas en función de muchos métodos, incluidos la coincidencia de frases, el encabezado de solicitud y el filtrado de URL, etc. No se filtra únicamente en función de una lista de sitios prohibidos.
> Este programa es software libre; puede redistribuirlo y / o modificarlo bajo los términos de la GNU General Public License versión 2 publicada por la Free Software Foundation.
> Este programa se distribuye con la esperanza de que sea útil, pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de COMERCIABILIDAD o APTITUD PARA UN PROPÓSITO EN PARTICULAR.


---

### Requerimientos

## Requerimientos técnicos detallados.

 ### Proxmox Mail Gateway
> Dependiendo del tráfico de email y configuraciones, mínimas especificaciones de Hardware:
> - CPU: 64bit (Intel EMT64 or AMD64)
> - 2 GB RAM
> - bootable CD-ROM-drive or USB boot support
> - Monitor with a resolution of 1024x768 for the installation
> - Hard disk with at least 8 GB of disk space
> - Ethernet network interface card

 ### e2guardian
> Puede instalar E2Guardian en cualquier sistema basado en Linux y se proporcionan pautas para compilar desde las fuentes. Un paquete de Debian también está disponible para instalar en distribuciones basadas en Debian. 
> Independientemente de cómo instale e2guardian, necesitará un proxy que funcione en su red (no es cierto con 5.x) que E2G puede aprovechar para obtener realmente las páginas. El proxy más utilizado es Squid, pero también funcionarán tinyproxy u oops (o cualquier otro para eso).

---

### Comparacion

## Comparación con al menos una herramienta comercial.

### FortiGuard Web Filtering
FortiGuard Web Filtering es el servicio de filtrado web certificado por VBWeb mejor calificado en la industria para la efectividad de la seguridad por Virus Bulletin. Bloqueó el 97.8% de las descargas directas de malware y detuvo el 98.6% del malware servido a través de todos los métodos probados en las pruebas de seguridad VBWeb 2017 de Virus Bulletin. Según Virus Bulletin, Fortinet es el único proveedor en las pruebas VBWeb 2017 con suficiente confianza en nuestra solución de seguridad para compartir resultados en una prueba pública.
Evita descargas de malware de sitios web maliciosos o pirateados.
Cumple con los requisitos de cumplimiento para CIPA y BECTA

> Pros:
> - Garantía de seguridad con certificados de calidad como CIPA y BECTA, además de cifras detalladas con datos recopilados de muchos usuarios.
> - Garantía de soporte y asesoría del servicio por parte del proveedor
> - Capacidad para configurarse y escalarse de forma adecuada sin temor a perder la consistencia de la seguridad.

> Contras:
> - Requiere un alto costo de suscripción al servicio de protección.
> - Dependencia del proveedor para realizar ajustes y correciones del servicio.


