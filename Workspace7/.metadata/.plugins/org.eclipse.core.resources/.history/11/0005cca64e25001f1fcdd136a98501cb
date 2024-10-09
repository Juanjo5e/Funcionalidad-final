package co.edu.uco.deviucopay.business.usecase.impl.cuenta;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.CuentaAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.CuentaDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarCuentas implements UseCaseWithReturn<CuentaDomain, List<CuentaDomain>> {

	
	private DAOFactory factory;
	public ConsultarCuentas(final DAOFactory factory){
        if(ObjectHelper.getObjectHelper().isNull(factory)){
            var mensajeUsuario = "Se ha presentado un porblema tratando de llevar a cabo la consulta de las  Cuentas";
            var mensajeTecnico = "El DAOFactory para crear la Cuentas llego nulo...";
            throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario);
        }
        this.factory = factory;
    }
	@Override
	public List<CuentaDomain> execute( final CuentaDomain data) {
		var cuentaEntityFilter =  CuentaAssemblerEntity.getInstance().toEntity(data);
		var resultadosEntity = factory.getCuentaDAO().consultar(cuentaEntityFilter);
			
		
		return CuentaAssemblerEntity.getInstance().toDomainCollection(resultadosEntity);
	}

}

