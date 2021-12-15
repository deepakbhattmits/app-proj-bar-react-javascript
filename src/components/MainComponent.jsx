/** @format */
const MainComponent = ({
	beers,
	isLoading,
	className,
	fbeers,
	addToFavorite,
	removeFromfavorite,
}) => {
	// console.log('isloading test : ', isLoading);
	return (
		<>
			<div className='ui link cards'>
				{beers &&
					beers.map((el, i) => {
						return (
							<div className='card' key={i}>
								<div className='ui medium image'>
									<img
										className='medium ui image'
										src={el.image_url}
										alt='img'
										style={{ width: 200, height: 200 }}
									/>
								</div>
								<div className='content'>
									<i
										id={el.id}
										className={`right floated star icon
                  ${
										className &&
										Object.values(className).filter((item) =>
											item.id === el.id ? item.id : ''
										).length > 0
											? 'green'
											: ''
									}`}
										onClick={
											className &&
											Object.values(className).filter((item) =>
												item.id === el.id ? item.id : ''
											).length > 0
												? removeFromfavorite
												: addToFavorite
										}
										title={`${
											className &&
											Object.values(className).filter((item) =>
												item.id === el.id ? item.id : ''
											).length > 0
												? 'Unmark Favorite'
												: 'Mark Favorite'
										}`}
									/>
									<div className='header'>{el.name}</div>
									<div className='meta'>
										<label>{el.tagline}</label>
									</div>
									<div className='description'>{el.description}</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};
export default MainComponent;
