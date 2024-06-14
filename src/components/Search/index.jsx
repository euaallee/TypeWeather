import * as C from './style'

export default function Search({NameCity}) {

    return (
        <>
            <C.GroupCity>
                <C.NameCity>
                    {NameCity}
                </C.NameCity>
            </C.GroupCity>
            <C.Separator />
        </>
    )
}
