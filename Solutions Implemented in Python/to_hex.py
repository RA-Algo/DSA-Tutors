def rgb(r, g, b):
    """
    It takes in three integers, checks that they are valid RGB values, and returns a hexadecimal string

    :param r: red value
    :param g: green
    :param b: the blue value
    :return: the hexadecimal value of the RGB values.

    Big O: O(1)

    see: https://www.codewars.com/kata/513e08acc600c94f01000001/train/python
    Reference: https://www.rapidtables.com/convert/color/rgb-to-hex.html
    Reference: https://www.w3schools.com/colors/colors_converter.asp
    Reference: https://www.w3schools.com/colors/colors_hexadecimal.asp
    Reference: max() and min() functions
    https://www.w3schools.com/python/ref_func_max.asp

    Reference: https://www.w3schools.com/python/python_strings.asp

    """
    #     check that the values are valid RGB values
    r = max(0, min(255, r))
    g = max(0, min(255, g))
    b = max(0, min(255, b))

    # convert decimal values to hexadecimals string
    hex_value = "{:02X}{:02X}{:02X}".format(r, g, b)

    return hex_value
