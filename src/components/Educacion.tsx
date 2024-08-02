interface Educacion {
	grado: string;
	escuela: string;
	fechaInicio: string;
	fechaFin: string;
	ubicacionEscuela: string;
}

export const Educacion = ({
	grado,
	escuela,
	fechaInicio,
	fechaFin,
	ubicacionEscuela,
}: Educacion) => {
	return (
		<div className='my-8 '>
			{" "}
			<h2 className='text-2xl max-md:text-lg max-md:font-bold max-md:text-center '>
				Educación
			</h2>
			<hr className='border-black' />
			<div className='flex flex-col sm:flex-row justify-between py-4'>
				<div className='flex flex-col gap-2'>
					<p>{grado ? grado : "Grado no especificado"}</p>
					<p>{escuela ? escuela : "Escuela no especificada"}</p>
					<p>
						{ubicacionEscuela
							? ubicacionEscuela
							: "Ubicacion de la escuela no especificada"}
					</p>
				</div>
				<div className='mt-2 sm:mt-0'>
					<p>
						{fechaInicio && fechaFin
							? `${fechaInicio} - ${fechaFin}`
							: "Fechas no especificadas"}
					</p>
				</div>
			</div>
		</div>
	);
};
