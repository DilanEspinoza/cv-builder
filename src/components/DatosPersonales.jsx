export const DatosPersonales = ({
	nombreCompleto,
	correo,
	telefono,
	ubicacion,
}) => {
	return (
		<div className='flex flex-col gap-5 items-center'>
			<h1 className='text-4xl'>{nombreCompleto}</h1>
			<ul className='flex gap-3'>
				<li>{correo}</li>
				<li>{telefono}</li>
				<li>{ubicacion}</li>
			</ul>
		</div>
	);
};
