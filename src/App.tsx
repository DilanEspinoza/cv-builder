import { useState } from "react";
import { DatosPersonales, Educacion, Experiencia } from "./components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
	const [form, setForm] = useState({
		nombreCompleto: "",
		correo: "",
		telefono: "",
		ubicacion: "",
		grado: "",
		escuela: "",
		fechaInicio: "",
		fechaFin: "",
		ubicacionEscuela: "",
		nombreEmpresa: "",
		ubicacionEmpresa: "",
		posicion: "",
		fechaInicioEmpresa: "",
		fechaFinalEmpresa: "",
		descripcion: "",
	});

	// const handleChange = ({ target }) => {
	// 	setNombreCompleto(target.value);
	// 	setCorreo(target.value);
	// };

	const handleSubmit = (e: any) => e.preventDefault();

	const handleChange = (e: any) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	/* 
	useEffect(() => {
		setCorreo("revoluc57@gmail.com");
		setTelefono("1234567890");
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
	}, []); */

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
						onSubmit={handleSubmit}
						action=''
						className={
							formDatosActivos ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Nombre completo
							<input
								type='text'
								placeholder='Dilan Espinoza'
								name='nombreCompleto'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Correo electrónico
							<input
								type='text'
								placeholder='example@gmail.com'
								name='correo'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Número de teléfono
							<input
								type='text'
								placeholder='1234567890'
								name='telefono'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Ubicación
							<input
								type='text'
								placeholder='Quito-Ecuador'
								name='ubicacion'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
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
						onSubmit={handleSubmit}
						action=''
						className={
							formEducacion ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Grado
							<input
								type='text'
								placeholder='Bachillerato Técnico'
								name='grado'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Escuela
							<input
								type='text'
								placeholder='Institucion Educativa Pomasqui'
								name='escuela'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha de inicio
							<input
								type='text'
								placeholder='Septiembre 2024'
								name='fechaInicio'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha final
							<input
								type='text'
								placeholder='Junio 2025'
								name='FechaFin'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Ubicacion
							<input
								type='text'
								placeholder='Quito, Pomasqui'
								name='ubicacionEscuela'
								onChange={handleChange}
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
						onSubmit={handleSubmit}
						action=''
						className={
							formExperiencia ? "hidden " : "flex flex-col gap-3 rounded-md"
						}>
						<label htmlFor='' className='flex flex-col'>
							{" "}
							Nombre de la empresa
							<input
								type='text'
								placeholder='Meta'
								name='nombreEmpresa'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Ubicación
							<input
								type='text'
								placeholder='Remoto'
								name='ubicacionEmpresa'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Posición
							<input
								type='text'
								placeholder='Jr. Front-End Developer'
								name='posicion'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha de inicio
							<input
								type='text'
								placeholder='Dilan '
								name='fechaInicioEmpresa'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col'>
							{" "}
							Fecha final
							<input
								type='text'
								placeholder='Present'
								name='fechaFinalEmpresa'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md'
							/>
						</label>

						<label htmlFor='' className='flex flex-col '>
							{" "}
							Descripción
							<textarea
								placeholder='Pequña descripcion del empleo...'
								name='descripcion'
								onChange={handleChange}
								className='bg-neutral-700 text-white border-none outline-none p-1 rounded-md w-full'
							/>
						</label>
					</form>
				</div>
			</aside>

			<main className='bg-white py-8 p-24 flex-1 h-full'>
				<DatosPersonales
					nombreCompleto={form.nombreCompleto}
					correo={form.correo}
					telefono={form.telefono}
					ubicacion={form.ubicacion}
				/>

				<Educacion
					grado={form.grado}
					escuela={form.escuela}
					fechaInicio={form.fechaInicio}
					fechaFin={form.fechaFin}
					ubicacionEscuela={form.ubicacionEscuela}
				/>

				<Experiencia
					nombreEmpresa={form.nombreEmpresa}
					ubicacionEmpresa={form.ubicacionEmpresa}
					posicion={form.posicion}
					fechaInicioEmpresa={form.fechaInicioEmpresa}
					fechaFinalEmpresa={form.fechaFinalEmpresa}
					descripcion={form.descripcion}
				/>
			</main>
		</div>
	);
}

export default App;
