package org.alien4cloud.tosca.normative.types;

import org.alien4cloud.tosca.exceptions.InvalidPropertyValueException;

/**
 * @author Minh Khang VU
 */
public class IntegerType implements IComparablePropertyType<Long> {

    public static final String NAME = "integer";

    @Override
    public Long parse(String text) throws InvalidPropertyValueException {
        try {
            return Long.parseLong(text);
        } catch (NumberFormatException e) {
            throw new InvalidPropertyValueException("Cannot parse integer value " + text, e);
        }
    }

    @Override
    public String print(Long value) {
        return String.valueOf(value);
    }

    @Override
    public String getTypeName() {
        return NAME;
    }
}
