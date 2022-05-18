import React, {useState, useEffect} from 'react'
import { Box, Grid, Button, Typography, Pagination } from '@mui/material'
import { findProducts } from '../../controller/findProduct';
import MiniCard from '../../component/cards/MiniCard';
import { useNavigate, useSearchParams, useOutletContext } from 'react-router-dom';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deleteProduct } from '../../controller/deleteProduct';

const MySwal = withReactContent(Swal);

export default function AllProducts() {
	const {lock,unlock} = useOutletContext()
	const [loading, setLoading] = lock
	const [loaded, setLoaded] = unlock
  	const [products, setProducts] = useState()
  	const [page, setPage] = useState(1)
	const [total, setTotal] = useState(1)
  	const [searchParams, setSearchParams] = useSearchParams({
	  	page: 1,
	  	size: 10
  	})
  	const nav = useNavigate()

	useEffect(()=>{
		fetchData().catch(console.error);
	},[searchParams])

  	const fetchData = async () => {
		loading()
		const response = await findProducts(searchParams.get("page"),searchParams.get("size"),"ALL","ALL","");
    	setProducts(response.items)
		const integer = Math.ceil(response.total/10)
		setTotal(integer)
		loaded()
	}

  	const handleClick = id => (event) => {
    	nav(`/detail/${id}`)
  	}

  	const handleChange = (event, value) => {
	  	setPage(value)
	  	setSearchParams({
			page: value,
			size: 10,
	  	})
  	};

  	const handleDelete = id => async (event) => {
		MySwal.fire({ //Fires a warning before doing the deletion
            title: <strong>Estas segura?</strong>,
            html: <i>Se va a borrar de manera peramente!</i>,
            showDenyButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes, delete!",
            confirmButtonColor: "rgb(255,206,199)",
            denyButtonText: "No!",
            denyButtonColor: "rgb(188,220,219)",
          }).then(async (result) => {
            if (result.isConfirmed) {
				const response = await deleteProduct(id)
              Swal.fire({
                title: "El producto fué borrado!",
                showConfirmButton: true,
                confirmButtonColor: "rgb(188,220,219)",
              }).then(async () => {
                nav(0);
              });
            }
          });
    }

  if(!products){
    <div>loading...</div>
  } else {
    return (
      <Box ml={2} mr={2}>
        <Grid container mt={5} mb={5}>
          {Array.from(products).map((el)=>
            <Grid item container md={4} sm={6} xs={12} key={el.data.id} >
              	<Grid item container xs={12} onClick={handleClick(el.data.id)} justifyContent="center">
                	<MiniCard item={el.data} url={el.data.images[0]} />
              	</Grid>
              	<Grid item container xs={12} justifyContent="center">
					<Button variant="contained" sx={{margin:1,backgroundColor:"rgb(255,206,199)"}} onClick={handleClick(el.data.id)}>
						<Typography color="black" fontSize={{sm:16,xs:10}}>Modificar</Typography>
					</Button>
              		<Button variant="contained" sx={{margin:1,backgroundColor:"rgb(188,220,219)"}} onClick={handleDelete(el.data.id)}>
                		<Typography color="black" fontSize={{sm:16,xs:10}}>Eliminar</Typography>
              		</Button>
              	</Grid>
            </Grid>
          )}
			<Grid mt={2} item container xs={12} justifyContent="center">
				<Pagination count={total} page={page} onChange={handleChange} siblingCount={1} boundaryCount={1} />
			</Grid>
        </Grid>
      </Box>
    )
  }
}
