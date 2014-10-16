package alien4cloud.tosca.container.model.type;

import java.util.Map;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import alien4cloud.tosca.container.deserializer.OperationDeserializer;
import alien4cloud.ui.form.annotation.FormProperties;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * Defines an operation available to manage particular aspects of the Node Type.
 * 
 * @author luc boutier
 */
@Getter
@Setter
@NoArgsConstructor
@SuppressWarnings("PMD.UnusedPrivateField")
@JsonDeserialize(using = OperationDeserializer.class)
@FormProperties({ "description" })
public class Operation {
    /** Implementation artifact for the interface. */
    private ImplementationArtifact implementationArtifact;
    /** Description of the operation. */
    private String description;
    /**
     * This OPTIONAL property contains a list of one or more input parameter definitions.
     */
    private Map<String, OperationParameter> inputParameters;
    /**
     * This OPTIONAL property contains a list of one or more output parameter definitions.
     */
    private Map<String, OperationParameter> outputParameters;

    /**
     * <p>
     * Jackson DeSerialization workaround constructor to create an operation with no arguments.
     * </p>
     * 
     * @param emptyString The empty string provided by jackson.
     */
    @SuppressWarnings("PMD.UnusedFormalParameterRule")
    public Operation(String emptyString) {
    }
}