export const DynamicImage = ({ filename, className = "" }) => {
	try {
		return <img
		src={require(`../../../assets/dishesImages/${filename}.jpg`)}
		alt=""
		className={className}
	 />
	} catch (error) {
		return <img
		src={require(`../../../assets/dishesImages/noImage.jpg`)}
		alt=""
		className={className}
	 />
	}
}
	

