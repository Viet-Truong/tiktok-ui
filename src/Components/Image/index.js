import { forwardRef } from "react";

const Image = forwardRef(({ ...props }, ref) => {
    return <img ref={ref} {...props} />;
});

export default Image;
