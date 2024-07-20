export const Educacion = ({
	grado,
	escuela,
	fechaInicio,
	fechaFin,
	ubicacionEscuela,
}) => {
	return (
		<div className='my-8'>
			<h2 className='text-2xl'>Educación</h2>
			<hr className='border-black' />
			{/* Detalles */}

			<div className='flex justify-between py-4'>
				<div className=''>
					<p>{grado ? grado : "Bachillerato Tecnico"}</p>
					<p>
						{escuela} | {ubicacionEscuela}{" "}
					</p>
				</div>
				<div className=''>
					<p>
						{" "}
						{fechaInicio} - {fechaFin}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
