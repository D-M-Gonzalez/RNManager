import { Grid, Typography, Button, Box} from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import DetailCard from '../../component/cards/DetailCard';
import MiniCard from '../../component/cards/MiniCard';
import DescriptionForm from '../../component/form/DescriptionForm';
import MainForm from '../../component/form/MainForm';
import UploadMultiForm from '../../component/form/UploadMultiForm';
import { createProduct } from '../../controller/createProduct';
import categorias from '../../data/categorias';
import { findProductById } from '../../controller/findProductById';
import { deleteProduct } from '../../controller/deleteProduct';

const MySwal = withReactContent(Swal);

export default function Home() {
	const {lock,unlock} = useOutletContext()
	const [loading, setLoading] = lock
	const [loaded, setLoaded] = unlock
    const [selectedItem, setSelectedItem] = useState({
		name: "",
		price: "",
		category: categorias[0].value,
		subcategory: categorias[0].subcategorias[0].value,
		description1: "",
		description2: "",
		tags: "",
		images:[
			{
			id:1,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:""
			},
			{
			id:2,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:""
			},
			{
			id:3,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:""
			},
			{
			id:4,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:""
			},        
			]
		})		
	const [subCat, setSubCat] = useState(categorias[0]);
  	const params = useParams()
	const nav = useNavigate()

  useEffect(()=>{
		params.id && fetchData().catch(console.error);
	},[])

  const fetchData = async () => {
		loading()
		const response = await findProductById(params.id);
		loaded()
		setSubCat(categorias.find((el)=>{
			return el.value === response.data.category
		}))
    	setSelectedItem({
		name: response.data.name,
		price: response.data.price,
		category: response.data.category,
		subcategory: response.data.subcategory,
		description1: response.data.description1,
		description2: response.data.description2,
		tags: response.data.tags,
		images:[
			{
			id:1,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:response.data.images[0]
			},
			{
			id:2,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:response.data.images[1]
			},
			{
			id:3,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:response.data.images[2]
			},
			{
			id:4,
			name:"vacio",
			file:undefined,
			preview:undefined,
			url:response.data.images[3]
			},        
			]
		})

	}

	const fileUpload = id => (event) => {
		const fileReader = new FileReader();
		const formats = ['.png','.jpeg','.jpg']
		const boolName = formats.some(el => event.target.files[0].name.includes(el))
		if ( boolName ){
			let images = selectedItem.images;
			fileReader.readAsDataURL(event.target.files[0]);
			fileReader.onload = (e) => {
				setSelectedItem({...selectedItem,images:images.map(el =>
					el.id === id ? ({
						id : id,
						name : event.target.files[0].name,
						file: event.target.files[0],
						preview : e.target.result
					}) : el
					)})
			};
		} else {
			MySwal.fire({
				title: <strong>Solo se permite formato PNG y JPG</strong>,
				showConfirmButton: true,
				confirmButtonText: "Okay",
				confirmButtonColor: "forestgreen",
			  })		
		}
	}

    const handleCatChange = (event) => {
        setSelectedItem({...selectedItem,category:event.target.value});
		setSubCat(categorias.find((el) => {
			return (el.value === event.target.value) && event.target.value
		})
		)
    };

    const handleSubCatChange = (event) => {
        setSelectedItem({...selectedItem,subcategory:event.target.value});
    };

    const handleChanges = (event) => {
        setSelectedItem({...selectedItem,[event.target.id]:event.target.value,})
    }

    const handleSave = async () => {
		loading()
        const response = await createProduct(selectedItem)
		loaded()
        MySwal.fire({
            title: <strong>{response.message}!</strong>,
            showConfirmButton: true,
            confirmButtonText: "Okay",
            confirmButtonColor: "forestgreen",
          });
    }

	const handleDelete = async () => {
		MySwal.fire({ //Fires a warning before doing the deletion
            title: <strong>Are you sure?</strong>,
            html: <i>Item will be permanently deleted!</i>,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, delete!",
            confirmButtonColor: "darkred",
            denyButtonText: "No!",
            denyButtonColor: "forestgreen",
          }).then(async (result) => {
            if (result.isConfirmed) {
				const response = await deleteProduct(params.id)
              Swal.fire({
                title: response.message,
                showConfirmButton: true,
                confirmButtonColor: "forestgreen",
              }).then(async () => {
                nav(-1);
              });
            }
          });
    }

    if( !selectedItem ){
      <div>loading...</div>
    } else {
      return (
          	<Box ml={2} mr={2}>
                <Grid container mt={{md:15, xs:20}} mb={{md:15, xs:20}}>
          			<Grid item container md={6} xs={12} justifyContent="center">
            			<MiniCard item={selectedItem} url={selectedItem.images[0].url}/>
          			</Grid>
          			<Grid item container md={6} xs={12}>
						<MainForm
							handleChanges={handleChanges}
							handleCatChange={handleCatChange}
							handleSubCatChange={handleSubCatChange}
							item={selectedItem}
							cat={categorias}
							subCat={subCat}
						/>
          			</Grid>
          			<Grid item container md={6} xs={12}>
						<DescriptionForm
							handleChanges={handleChanges}
							item={selectedItem}
						/>
          			</Grid>
          			<Grid item container md={6} xs={12}>
						<UploadMultiForm
							item={selectedItem}
							upload={fileUpload}
						/>
            		<Grid item xs={1}/>
            		<Grid item xs/>
            		<Grid item container mt={2} xs={4} justifyContent="center">
              			<Button variant="contained" sx={{backgroundColor:"rgb(255,206,199)"}} onClick={handleSave}>
                			<Typography color="black" fontSize={{sm:16,xs:10}}>Guardar Cambios</Typography>
              			</Button>
            		</Grid>
					<Grid item container mt={2} xs={4} justifyContent="center">
              			<Button variant="contained" sx={{backgroundColor:"rgb(188,220,219)"}} onClick={handleDelete}>
                			<Typography color="black" fontSize={{sm:16,xs:10}}>Eliminar</Typography>
              			</Button>
            		</Grid>
            		<Grid item xs/>
          			</Grid>
          			<Grid container item mt={10} xs={12}>
            			<DetailCard
              				item={selectedItem} urls={selectedItem.images}
            			/>
          			</Grid>
              	</Grid>
          	</Box>
      )
    }
}
