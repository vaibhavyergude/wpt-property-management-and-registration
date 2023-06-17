import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function PropertyCard() {
	return (
		<div className="row">
			<div className="col">
				<Card sx={{ maxWidth: 300 }} className="m-2">
					<CardMedia
						sx={{ height: 140 }}
						image="https://picsum.photos/id/237/200/300"
						title="green iguana"
					/>
					<CardContent>
						<div className="d-flex justify-content-between">
							<Typography gutterBottom variant="h5" component="div">
								**Price**
							</Typography>
							<Typography>
								<FavoriteBorderOutlinedIcon />
							</Typography>
						</div>
						<div>
							<Typography variant="body2" color="text.secondary">
								4 Beds 2 Baths 1010 Sq.Ft. 6315 S Austin Ave, Chicago, IL, 60638
							</Typography>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default PropertyCard;
