import { Box, ChakraProvider, Skeleton, SkeletonText } from '@chakra-ui/react'

const CustomSkeletonVertical = () => {
	return (
		<Box
			padding='6'
			boxShadow='lg'
			bg='white'
			borderRadius='20'
			border='2px solid #f0f0f0'
			height='350px'
			width='225px'
		>
			<Skeleton height='200px' my='4' />
			<SkeletonText mt='2' noOfLines={2} spacing='4' skeletonHeight='2' />
			<Box display='flex' justifyContent='space-between' mt='4'>
				<Skeleton height='20px' width='30px' />
				<Skeleton height='20px' width='50px' />
			</Box>
		</Box>
	)
}

const CustomSkeletonHorizontal = () => {
	return (
		<Box
			padding='6'
			boxShadow='lg'
			bg='white'
			borderRadius='20'
			border='2px solid #f0f0f0'
			height='295px'
			width='785px'
		>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Skeleton ml='7px' width='180px' height='244px' />
				<Box width='500px'>
					<SkeletonText
						mb='3'
						noOfLines={1}
						spacing='1'
						skeletonHeight='2'
						width='100px'
					/>
					<SkeletonText mb='3' noOfLines={2} spacing='2' skeletonHeight='5' />
					<Skeleton height='20px' width='50px' mr='2' mb='10' />
					<SkeletonText mb='3' noOfLines={4} spacing='2' skeletonHeight='2' />
					<Box display='flex' alignItems='center' gap={4}>
						<Skeleton height='30px' width='60px' />
						<Skeleton height='40px' width='40px' mr='20px' />
						<Skeleton height='40px' width='40px' />
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

const CardListSkeleton = ({ layout }) => {
	return (
		<ChakraProvider>
			{layout === 'basket' ? (
				<>
					<CustomSkeletonHorizontal />
					<CustomSkeletonHorizontal />
				</>
			) : (
				<>
					<CustomSkeletonVertical />
					<CustomSkeletonVertical />
					<CustomSkeletonVertical />
				</>
			)}
		</ChakraProvider>
	)
}

export default CardListSkeleton
