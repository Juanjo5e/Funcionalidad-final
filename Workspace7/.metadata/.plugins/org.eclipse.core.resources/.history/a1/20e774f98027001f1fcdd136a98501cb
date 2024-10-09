package co.edu.uco.deviucopay.business.usecase.impl.institucion;
import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.InstitucionAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.InstitucionDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;


public class ConsultarInstituciones implements UseCaseWithReturn<InstitucionDomain, List<InstitucionDomain>> {

    private DAOFactory factory;

    public ConsultarInstituciones(final DAOFactory factory) {
        if(ObjectHelper.getObjectHelper().isNull(factory)) {
            var mensajeUsuario = "Se ha presentado un problema tratando de llevar a cabo la consulta de los Institucioness...";
            var mensajeTecnico = "El dao factory para consultar el Instituciones llegó nulo...";
            throw new BusinessDeviUcopayException(mensajeUsuario, mensajeTecnico);
        }
        
        this.factory = factory;
    }

    @Override
    public List<InstitucionDomain> execute(final InstitucionDomain data) {
        var InstitucionesEntityFilter = 
                InstitucionAssemblerEntity.getInstance().toEntity(data);
        var resultadosEntity = factory.getInstitucionDAO().consultar(InstitucionesEntityFilter);
        
        return InstitucionAssemblerEntity.getInstance().
                toDomainCollection(resultadosEntity);
    }
}