export const DatosPersonales = ({
	nombreCompleto,
	correo,
	telefono,
	ubicacion,
}) => {
	return (
		<div className='flex flex-col gap-5 items-center'>
			<h1 className='text-4xl max-md:text-center'>
				{nombreCompleto ? nombreCompleto : "Nombre no especificado"}
			</h1>
			<ul className='flex gap-3 flex-wrap max-md:justify-center'>
				<li>{correo ? correo : "Correo no especificado"}</li>
				<li>{telefono ? telefono : "Telefono no especificado"}</li>
				<li>{ubicacion ? ubicacion : "Ubicacion no especificado"}</li>
			</ul>
		</div>
	);
};
