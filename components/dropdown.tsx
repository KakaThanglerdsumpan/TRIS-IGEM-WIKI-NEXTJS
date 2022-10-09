import { Menu } from '@headlessui/react'

function DropDowns(props: any) {
    return (
        <>
            <Menu>
                <Menu.Button>{props.name}</Menu.Button>
                <Menu.Items>
                    {props.arr.map(function (val, i) {
                        return (
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href={`/${val}`}
                                    >
                                        {val}
                                    </a>
                                )}
                            </Menu.Item>
                        )
                    })}
                </Menu.Items>
            </Menu>
        </>
    )
}

export default DropDowns
