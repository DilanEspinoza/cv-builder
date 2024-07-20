export const Experiencia = ({
	nombreEmpresa,
	ubicacionEmpresa,
	posicion,
	descripcion,
	fechaInicioEmpresa,
	fechaFinalEmpresa,
}) => {
	return (
		<div className=''>
			<h2 className='text-2xl'>Experiencia</h2>
			<hr className='border-black' />
			<div className='flex justify-between py-6 '>
				<div className='flex-1 '>
					<div className='flex flex-col gap-3'>
						<p>
							{nombreEmpresa} | {ubicacionEmpresa}{" "}
						</p>
						<p className=' font-light'>{posicion}</p>
						<p>{descripcion}</p>
					</div>
				</div>
				<div className=''>
					<p>
						{fechaInicioEmpresa} - {fechaFinalEmpresa}
					</p>
				</div>
			</div>
		</div>
	);
};
