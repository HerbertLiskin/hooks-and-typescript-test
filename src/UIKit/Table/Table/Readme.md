Table with hover on body row and active row
```js
    const Tbody = require('../index.js').Tbody;
    const Thead = require('../index.js').Thead;
    const Td = require('../index.js').Td;
    const Tr = require('../index.js').Tr;

        <Table minWidth="500px"> 
            <Thead>
                <Tr>
                    <Td
                        header
                        left 
                        minWidth="110px"
                    >
                        Flex left cell
                    </Td>
                    <Td header basis minWidth="100px">Flex basis</Td>
                    <Td header center minWidth="100px">Flex center</Td>
                    <Td header right minWidth="100px">Flex right</Td>
                    <Td header small>sml</Td>
                </Tr>
            </Thead>
            <Tbody>
                <Tr 
                    isHovering
                    onClick={() => {alert('ama clickable row')}} 
                >
                    <Td 
                        left
                        minWidth="110px"
                    > 
                        1.2450000000
                    </Td>
                    <Td basis minWidth="100px">This row is clickable 32.423</Td>
                    <Td center minWidth="100px">4.3234524</Td>
                    <Td right minWidth="100px">3.21</Td>
                    <Td small>1</Td>
                </Tr>
                <Tr isHovering isDisabled>
                    <Td 
                        left
                        minWidth="110px"
                    >
                        325.41
                    </Td>
                    <Td basis minWidth="100px">isDisabledRow 34.32100000</Td>
                    <Td center minWidth="100px">3.4524</Td>
                    <Td right minWidth="100px">3.5521</Td>
                    <Td small>2</Td>
                </Tr>
                <Tr isHovering isActive>
                    <Td 
                        left
                        minWidth="110px"
                    >
                        3.25410000
                    </Td>
                    <Td basis minWidth="100px">isActiveRow 1.341</Td>
                    <Td center minWidth="100px">0.0000533</Td>
                    <Td right minWidth="100px">8.35521</Td>
                    <Td small>3</Td>
                </Tr>
                <Tr isHovering>
                    <Td 
                        left
                        minWidth="110px"
                    >
                        7.3254100
                    </Td>
                    <Td basis minWidth="100px">5.34321</Td>
                    <Td center minWidth="100px">1.524</Td>
                    <Td right minWidth="100px">3.5521</Td>
                    <Td small>4</Td>
                </Tr>
                <Tr isHovering>
                    <Td 
                        left
                        minWidth="110px"
                    >
                        3.25410000
                    </Td>
                    <Td basis minWidth="100px"> 
                        1.341<br />
                        October 12, 2018<br />
                        and other content <br />
                        very big cell
                    </Td>
                    <Td center minWidth="100px">0.0000533</Td>
                    <Td right minWidth="100px">8.35521</Td>
                    <Td small>5</Td>
                </Tr>
                <Tr>
                    <Td 
                        isHovering 
                        left
                        minWidth="110px"
                    >
                        32541
                    </Td>
                    <Td 
                        isHovering 
                        basis
                        minWidth="100px"
                        onClick={() => {alert('ama clickable cell')}}
                    >
                        This cell is clickable 34321
                    </Td>
                    <Td 
                        isHovering 
                        center
                        minWidth="100px"
                    >
                        9.2424
                    </Td>
                    <Td 
                        isHovering 
                        right
                        isActive
                        minWidth="100px"
                    >
                        isActive cell
                    </Td>
                    <Td isHovering small>6</Td>
                </Tr>
            </Tbody>
        </Table>
```