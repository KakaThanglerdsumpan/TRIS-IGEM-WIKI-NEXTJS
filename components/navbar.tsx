import DropDowns from './dropdown'

const NavBar = () => {
    return (
        <>
            <div className="font-druk drop-shadow-md text-xl text-indigo">
                <div className="xl:static fixed xl:px-12 xl:py-9 xl:visible invisible">
                    <div className="grid grid-rows-1 grid-flow-col auto-cols-max justify-between">
                        <div>HOME</div>
                        <DropDowns name="hi" arr={['fsdfad', 'sfsa']} />
                        <div>PROJECT</div>
                        <div>MODEL</div>
                        <div>PARTS</div>
                        <div>HUMAN PRACTICES</div>
                        <div>JUDGING FORM</div>
                    </div>
                </div>
                <div className="visble xl:invisible xl:fixed static px-5 py-9 xl:p-0">
                    <div>THAILAND_RIS</div>
                </div>
            </div>
        </>
    )
}

export default NavBar
