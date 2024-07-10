import { Box, ChakraProvider, Skeleton, SkeletonText } from '@chakra-ui/react'

const CustomSkeleton = () => {
	return (
		<Box padding="6" boxShadow="lg" bg="white" borderRadius="20" border="2px solid #f0f0f0" height="350px" width="225px">
			<Skeleton height="200px" my="4" />
			<SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
			<Box display="flex" justifyContent="space-between" mt="4">
				<Skeleton height="20px" width="30px" />
				<Skeleton height="20px" width="50px" />
			</Box>
		</Box>
	)
}

const CardListSkeleton = () => {
	return (
		<ChakraProvider>
			<>
				<CustomSkeleton />
				<CustomSkeleton />
				<CustomSkeleton />
			</>
		</ChakraProvider>
	)
}

export default CardListSkeleton
