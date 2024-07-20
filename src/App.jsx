import { useState, useEffect } from "react";
import { DatosPersonales, Educacion, Experiencia } from "./components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
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

	const [formDatosActivos, setFormDatosActivos] = useState(true);
	const [formEducacion, setFormEducacion] = useState(true);
	const [formExperiencia, setFormExperiencia] = useState(true);

	return (
		<div className='flex justify-between  gap-10 p-20  ' id='container'>
			<aside className=' flex flex-col gap-5 w-1/4 '>
				<div className='flex flex-col bg-white p-6 gap-4 rounded-md '>
					<div className='flex justify-between '>
						<h1 className='font-medium text-2xl'>Datos personales</h1>
						<button
							onClick={() => {
								setFormDatosActivos(!formDatosActivos);
							}}>
							{formDatosActivos ? (
								<FontAwesomeIcon icon={faAngleUp} />
							) : (
								<FontAwesomeIcon icon={faAngleDown} />
							)}
						</button>
					</div>
					<form
						onSubmit={(e) => e.preventDefault()}
						action=''
						className={
							formDatosActivos ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Nombre completo
							<input
								type='text'
								defaultValue={nombreCompleto}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
								onChange={(e) => {
									setNombreCompleto(e.target.value);
								}}
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Correo electrónico
							<input
								type='text'
								defaultValue={correo}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
								onChange={(e) => {
									setCorreo(e.target.value);
								}}
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Número de teléfono
							<input
								type='text'
								defaultValue={telefono}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
								onChange={(e) => {
									setTelefono(e.target.value);
								}}
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Ubicación
							<input
								type='text'
								defaultValue={ubicacion}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
								onChange={(e) => {
									setUbicacion(e.target.value);
								}}
							/>
						</label>
					</form>
				</div>

				<div className='flex flex-col bg-white p-6 gap-4 rounded-md'>
					<div className='flex justify-between '>
						<h1 className='font-medium text-2xl'>Educación </h1>
						{/* <ToggleButton /> */}
						<button
							onClick={() => {
								setFormEducacion(!formEducacion);
							}}>
							{formEducacion ? (
								<FontAwesomeIcon icon={faAngleUp} />
							) : (
								<FontAwesomeIcon icon={faAngleDown} />
							)}
						</button>
					</div>

					<form
						onSubmit={(e) => e.preventDefault()}
						action=''
						className={
							formEducacion ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Grado
							<input
								type='text'
								defaultValue={grado}
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
								defaultValue={escuela}
								onChange={(e) => {
									setEscuela(e.target.value);
								}}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha de inicio
							<input
								type='text'
								defaultValue={fechaInicio}
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
								defaultValue={fechaFin}
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
								defaultValue={ubicacionEscuela}
								onChange={(e) => {
									setUbicacionEscuela(e.target.value);
								}}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
					</form>
				</div>

				<div className='flex flex-col bg-white p-6 gap-4 rounded-md'>
					<div className='flex justify-between '>
						<h1 className='font-medium text-2xl'>Experiencia </h1>
						<button
							onClick={() => {
								setFormExperiencia(!formExperiencia);
							}}>
							{formExperiencia ? (
								<FontAwesomeIcon icon={faAngleUp} />
							) : (
								<FontAwesomeIcon icon={faAngleDown} />
							)}
						</button>
					</div>

					<form
						onSubmit={(e) => e.preventDefault()}
						action=''
						className={
							formExperiencia ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						{" "}
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Nombre de la empresa
							<input
								type='text'
								defaultValue={nombreEmpresa}
								onChange={(e) => setNombreEmpresa(e.target.value)}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Ubicación
							<input
								type='text'
								defaultValue={ubicacionEmpresa}
								onChange={(e) => setUbicacionEmpresa(e.target.value)}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Posición
							<input
								type='text'
								defaultValue={posicion}
								onChange={(e) => setPosicion(e.target.value)}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha de inicio
							<input
								type='text'
								onChange={(e) => setFechaInicioEmpresa(e.target.value)}
								defaultValue={fechaInicioEmpresa}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha final
							<input
								type='text'
								defaultValue={fechaFinalEmpresa}
								onChange={(e) => setFechaFinalEmpresa(e.target.value)}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>
						<label htmlFor='' className='flex flex-col '>
							{" "}
							Descripción
							<textarea
								defaultValue={descripcion}
								onChange={(e) => setDescripcion(e.target.value)}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md w-full'
							/>
						</label>
					</form>
				</div>
			</aside>

			<main className='bg-white py-8 p-24 flex-1 h-full'>
				<DatosPersonales
					nombreCompleto={nombreCompleto}
					correo={correo}
					telefono={telefono}
					ubicacion={ubicacion}
				/>

				<Educacion
					grado={grado}
					escuela={escuela}
					fechaInicio={fechaInicio}
					fechaFin={fechaFin}
					ubicacionEscuela={ubicacionEscuela}
				/>

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
