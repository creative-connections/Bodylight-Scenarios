within ;
model TlakPrutok
        Real Q;
        parameter Real R = 1.9;
        parameter Real Pin = 25.1;
        parameter Real Pout = 15.6;
equation
  Q = (Pin-Pout)/R;
  annotation (Icon(coordinateSystem(preserveAspectRatio=false)), Diagram(
        coordinateSystem(preserveAspectRatio=false)));
end TlakPrutok;
