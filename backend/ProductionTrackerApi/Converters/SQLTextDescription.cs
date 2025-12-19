using System;

namespace ProductionTrackerApi.Converters;

public class SQLTextDescription : Attribute
{
    public string TextDescription { get; }

    public SQLTextDescription(string value)
    {
        TextDescription = value;
    }
}
