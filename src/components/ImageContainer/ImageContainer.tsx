import React from "react";

import Image from "next/image";

import { ImageContainerProps } from "../../lib/types/components.types";

const ImageContainer: React.FC<ImageContainerProps> = ({
	imageAlt,
	imageSorce,
}) => (
	<div>
		<Image
			src={imageSorce}
			alt={imageAlt}
			width={250}
			height={250}
			priority={true}
			className="rounded-lg"
		/>
	</div>
);

export default ImageContainer;
