interface Experiencia {
	nombreEmpresa: string;
	ubicacionEmpresa: string;
	posicion: string;
	descripcion: string;
	fechaInicioEmpresa: string;
	fechaFinalEmpresa: string;
}
export const Experiencia = ({
	nombreEmpresa,
	ubicacionEmpresa,
	posicion,
	descripcion,
	fechaInicioEmpresa,
	fechaFinalEmpresa,
}: Experiencia) => {
	return (
		<div className=''>
			<h2 className='text-2xl max-md:text-lg max-md:font-bold max-md:text-center'>
				Experiencia
			</h2>
			<hr className='border-black' />
			<div className='flex justify-between py-6 flex-wrap '>
				<div className='flex-1 '>
					<div className='flex flex-col gap-3'>
						<p>
							{nombreEmpresa && ubicacionEmpresa
								? `${nombreEmpresa} - ${ubicacionEmpresa}`
								: "Nombre o ubicacion no especificados"}
						</p>
						<p className=' font-light'>
							{posicion ? posicion : "Posicion no especificada"}
						</p>
						<p>{descripcion ? descripcion : "Descripcion no especificada"}</p>
					</div>
				</div>
				<div className=''>
					<p>
						{" "}
						{fechaInicioEmpresa && fechaFinalEmpresa
							? `${fechaInicioEmpresa} - ${fechaFinalEmpresa}`
							: "Fechas no especificadas"}
					</p>
				</div>
			</div>
		</div>
	);
};
