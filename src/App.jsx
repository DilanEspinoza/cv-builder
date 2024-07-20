import { useState, useEffect } from "react";
import { DatosPersonales, Educacion, Experiencia } from "./components";
import "./App.css";

function App() {
	const [nombreCompleto, setNombreCompleto] = useState("");
	const [correo, setCorreo] = useState("");
	const [telefono, setTelefono] = useState("");
	const [ubicacion, setUbicacion] = useState("");

	const [grado, setGrado] = useState("");
	const [escuela, setEscuela] = useState("");
	const [fechaInicio, setFechaInicio] = useState("");
	const [fechaFin, setFechaFin] = useState("");
	const [ubicacionEscuela, setUbicacionEscuela] = useState("");

	const [nombreEmpresa, setNombreEmpresa] = useState("");
	const [ubicacionEmpresa, setUbicacionEmpresa] = useState("");
	const [posicion, setPosicion] = useState("");
	const [fechaInicioEmpresa, setFechaInicioEmpresa] = useState("");
	const [fechaFinalEmpresa, setFechaFinalEmpresa] = useState("");
	const [descripcion, setDescripcion] = useState("");

	// const handleChange = ({ target }) => {
	// 	setNombreCompleto(target.value);
	// 	setCorreo(target.value);
	// };

	useEffect(() => {
		setNombreCompleto("Dilan Espinoza");
		setCorreo("revoluc57@gmail.com");
		setTelefono("0908625802");
		setUbicacion("Quito-Ecuador");

		setGrado("Bachillerato Tecnico");
		setEscuela("Institucion Educativa Pomasqui");
		setFechaInicio("Septiembre 2024");
		setFechaFin("Junio 2025");
		setUbicacionEscuela("Quito,Pomasqui");

		setNombreEmpresa("Apple");
		setUbicacionEmpresa("Remoto");
		setPosicion("Jr. Front-End Developer");
		setFechaInicioEmpresa("February 2024");
		setFechaFinalEmpresa("Present");
		setDescripcion(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		);
	}, []);

	return (
		<div className='flex justify-between  gap-10 p-20'>
			<aside className=' flex flex-col gap-5 w-1/4'>
				<form
					action=''
					className='bg-white p-6  flex flex-col gap-3 rounded-md'>
					<h1 className='font-medium text-2xl'>Datos personales</h1>

					{/*Nombre completo  */}
					<label htmlFor='' className='flex flex-col'>
						{" "}
						Nombre completo
						<input
							type='text'
							value={nombreCompleto}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setNombreCompleto(e.target.value);
							}}
						/>
					</label>

					{/*Correo electronico  */}
					<label htmlFor='' className='flex flex-col'>
						{" "}
						Correo electrónico
						<input
							type='text'
							value={correo}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setCorreo(e.target.value);
							}}
						/>
					</label>

					{/*Telefono  */}
					<label htmlFor='' className='flex flex-col'>
						{" "}
						Número de teléfono
						<input
							type='text'
							value={telefono}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setTelefono(e.target.value);
							}}
						/>
					</label>

					{/*Ubicacion  */}
					<label htmlFor='' className='flex flex-col'>
						{" "}
						Ubicación
						<input
							type='text'
							value={ubicacion}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setUbicacion(e.target.value);
							}}
						/>
					</label>
				</form>

				<form
					action=''
					className='bg-white p-6  flex flex-col gap-3 rounded-md'>
					<h1 className='font-medium text-2xl'>Educación </h1>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Grado
						<input
							type='text'
							value={grado}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setGrado(e.target.value);
							}}
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Escuela
						<input
							type='text'
							value={escuela}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setEscuela(e.target.value);
							}}
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Fecha de inicio
						<input
							type='text'
							value={fechaInicio}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setFechaInicio(e.target.value);
							}}
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Fecha final
						<input
							type='text'
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setFechaFin(e.target.value);
							}}
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Ubicacion
						<input
							type='text'
							value={ubicacionEscuela}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							onChange={(e) => {
								setUbicacionEscuela(e.target.value);
							}}
						/>
					</label>
				</form>

				<form
					action=''
					className='bg-white p-6  flex flex-col gap-3 rounded-md'>
					<h1 className='font-medium text-2xl'>Experiencia </h1>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Nombre de la empresa
						<input
							type='text'
							value={nombreEmpresa}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Ubicación
						<input
							type='text'
							value={ubicacionEmpresa}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Posición
						<input
							type='text'
							value={posicion}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Fecha de inicio
						<input
							type='text'
							value={fechaInicioEmpresa}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>

					<label htmlFor='' className='flex flex-col'>
						{" "}
						Fecha final
						<input
							type='text'
							value={fechaFinalEmpresa}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>

					<label htmlFor='' className='flex flex-col '>
						{" "}
						Descripción
						<textarea
							value={descripcion}
							className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
						/>
					</label>
				</form>
			</aside>

			<main className='bg-white py-8 p-24 flex-1 h-full'>
				{/* Datos personales */}
				<DatosPersonales
					nombreCompleto={nombreCompleto}
					correo={correo}
					telefono={telefono}
					ubicacion={ubicacion}
				/>

				{/* Educacion */}

				<Educacion
					grado={grado}
					escuela={escuela}
					fechaInicio={fechaInicio}
					fechaFin={fechaFin}
					ubicacionEscuela={ubicacionEscuela}
				/>

				{/* Experiencia */}

				<Experiencia
					nombreEmpresa={nombreEmpresa}
					ubicacionEmpresa={ubicacionEmpresa}
					posicion={posicion}
					fechaInicioEmpresa={fechaInicioEmpresa}
					fechaFinalEmpresa={fechaFinalEmpresa}
					descripcion={descripcion}
				/>
			</main>
		</div>
	);
}

export default App;
