
let opcion= Number(prompt("ingrese el numero del dia(1-7)"));


switch (opcion) {
    case 1:{
        day ="Es Domingo"
        alert (day)
    }
        
        break;
        case 2:{
            day ="Es Lunes"
            alert (day)
        }
            
            break;
            case 3:{
                day ="Es Martes"
                alert (day)
            }
                
                break;
                case 4:{
                    day ="Es Miercoles"
                    alert (day)
                }
                    
                    break;   case 5:{
                        day ="Es Jueves"
                        alert (day)
                    }
                        
                        break;   
                        case 6:{
                            day ="Es Viernes"
                            alert (day)
                        }
                            
                            break;

                            case 7:{
                                day ="Es Sabado"
                                alert (day)
                            }
                                
                                break;

    default:
        alert ("Ingrese el numero del dia de la semana del 1-7")
        break;
}