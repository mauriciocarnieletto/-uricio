import * as renderer from "react-test-renderer";
import { Select } from "./Select";


describe("select", () => {

    it("Should render", () => {
        const component = renderer.create(<Select />);

        expect(component).toBeTruthy()
    })
})